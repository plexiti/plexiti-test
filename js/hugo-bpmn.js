function renderBpmn(index, element, print) {
  // create unique id for div holding the bpmn
  var bpmnId = "bpmn-" + (index + 1);
  // create the div
  var bpmnDiv = element.append("<div id='" + bpmnId + "'></div>").find("#" + bpmnId);
  // create the thumbs div
  var thumbs = element.attr("thumbs");
  if (thumbs) {
    bpmnDiv.append("<i class='fa fa-thumbs-" + thumbs + "'>")
  }
  // render the svg
  var viewer = new window.BpmnJS({container: "#" + bpmnId});
  $.get(element.attr("bpmn"), function (bpmnDiagram) {
    viewer.importXML(bpmnDiagram, function (err) {
      if (!err) {
        // adjust the size of the view box
        var canvas = viewer.get('canvas');
        adjustBox(canvas.viewbox(), canvas.viewbox().outer.width);
        bpmnDiv.attr("style", "height: " + (canvas.viewbox().outer.height) + "px; overflow: visible");
        bpmnDiv.attr("class", "bjs-asciidoc");
        // create callout overlays
        var overlays = viewer.get('overlays');
        if (element.attr("callouts")) {
          var callouts = element.attr("callouts").split(',');
          for (var i = 0; i < callouts.length; ++i) {
            if (i in callouts) {
              overlays.add(callouts[i].trim(), {
                html: '<i class="conum" data-value="' + (i + 1) + '"></i>',
                position: {
                  right: 1,
                  top: -12
                },
                show: {
                  minZoom: 0
                }
              });
            }
          }
        }
        canvas.zoom('fit-viewport');
      } else {
        console.log("Error while rendering " + element.attr("bpmn") + ": ", err);
      }
    });
  }, 'text');
}

function renderDmn(index, element, print) {
  // create unique id for div holding the dmn
  var dmnId = "dmn-" + (index + 1) + (print ? "-print" : "-screen");
  // create the div
  var dmnDiv = element.append("<div id='" + dmnId + "'></div>").find("#" + dmnId);
  // create the thumbs div
  var thumbs = element.attr("thumbs");
  if (thumbs) {
    dmnDiv.append("<a href='../using-our-best-practices/#thumbs' class='icon thumbs'><i class='fa fa-thumbs-" + thumbs + "'></a>")
  }
  // render the table
  var hideDetails = element.attr("hideDetails") !== "false";
  var viewer = new window.DmnJS({container: "#" + dmnId, hideDetails: hideDetails});
  $.get(element.attr("dmn"), function (dmnDiagram) {
    viewer.importXML(dmnDiagram, function (err) {
      if (!err) {
        if (element.attr("callouts")) {
          // prepare a small array of callout objects
          var callouts = [];
          element.attr("callouts").split(',').forEach(function(entry) {
            var ent = {
              col: entry.split(':')[0],
              row: entry.split(':')[1]
            };
            callouts.push(ent);
          });
          // hook in callout objects as overlays by using the event bus
          viewer.get('eventBus').on('cell.render', function (event) {
            for (var i = 0; i < callouts.length; ++i) {
              if (event.data.column.id === callouts[i].col &&
                  event.data.row.id === callouts[i].row) {
                // avoid to add children several times (don't know why the event fires several times for a cell)
                if (event.gfx.lastChild.nodeName !== 'B') {
                  // prepare callout elements
                  var el1 = document.createElement('i');
                  el1.setAttribute("class", "conum");
                  el1.setAttribute("data-value", (i + 1).toString());
                  var el2= document.createElement('b');
                  el2.appendChild(document.createTextNode('(' + (i + 1) + ')'));
                  // append callout elements
                  event.gfx.appendChild(el1);
                  event.gfx.appendChild(el2);
                };
              }
            }
          });
        }
        // re-render to apply new renderer
        viewer.get('elementRegistry').forEach(function (element, gfx) {
          viewer.get('graphicsFactory').update(element._type, element, gfx);
        });
        //enable thumbs
        thumbs = thumbs ? " " + thumbs : "";
        dmnDiv.attr("class", "tjs-asciidoc" + thumbs);
        if (!print)
          scrollToHash();
      } else {
        console.log("Error while rendering " + element.attr("dmn") + ": ", err);
      }
    });
  }, 'text');
}

function browser() {
  var isOpera = !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
  var isFirefox = typeof InstallTrigger !== 'undefined';   // Firefox 1.0+
  var isSafari = Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0;
  var isChrome = !!window.chrome && !isOpera;              // Chrome 1+
  var isIE = /*@cc_on!@*/false || !!document.documentMode; // At least IE6
  if (isChrome) {
    return 'chrome';
  } else if (isIE) {
    return 'ie';
  } else if (isSafari) {
    return 'safari';
  } else if (isOpera) {
    return 'opera';
  } else if (isFirefox) {
    return 'firefox';
  }
  return null;
}

var locationHash = location.hash;
var bpmnDivsCount = 0;
var bpmnDivsAll = 0;

function scrollToHash() {
  bpmnDivsCount++;
  if (bpmnDivsCount === bpmnDivsAll && location.hash) {
    var top = $(location.hash).offset().top;
    window.scrollTo(0, top);
  }
}

function renderAll() {
  var bpmnDivs = $("div[bpmn]");
  bpmnDivsAll += bpmnDivs.length;
  // iterate over all divs with a bpmn attribute
  bpmnDivs.each(function (index) {
    window.setTimeout(renderBpmn, index * 100, index, $(this), false);
  });
  var dmnDivs = $("div[dmn]");
  bpmnDivsAll += dmnDivs.length;
  // iterate over all divs with a dmn attribute
  dmnDivs.each(function (index) {
    window.setTimeout(renderDmn, index * 100, index, $(this), false);
  });
}

function adjustBox(box, width) {
  var factor = box.inner.width > width ? 1 / box.inner.width * width : 1.0;
  box.outer.height = Math.max(Math.ceil(box.inner.height * factor), 115);
}

// Add onload listener
if (window.addEventListener) { //W3C
  window.addEventListener('load', renderAll, false);
}
else { //IE
  window.attachEvent('onload', renderAll);
}
