---
title: Ein Test Blog Post mit allen Medientypen
description: "
    Dieser Test Blog Post zeigt alle Möglichkeiten auf Text darzustellen und jene Medientypen einzubinden, die ich bisher zur Verwendung in Blog Posts implementiert habe.
"
date: 2016-07-13T21:29:07+02:00
author: Martin Schimak
draft: true
---

Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,

# Links, Zitate und erstaunliche Icons

Lorem ipsum dolor sit {{<icon coffee>}} amet, consectetuer  [adipiscing elit][1]. Aenean commodo ligula eget dolor. Aenean massa.

> Das Geheimnis der Kreativität ist es, zu wissen wie man seine Quellen versteckt. <cite>Albert Einstein</cite>

Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.

# Bilder mit oder ohne Untertitel und Credits

Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.

{{<image src="../img/the-great-pyramid-of-giza.jpg" credits="Martin Schimak" original="http://derstandard.at" license="CC BY-SA 2.0" caption="Die Pyramiden von Gizeh">}}

Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.

{{<image src="https://s3-us-west-1.amazonaws.com/powr/defaults/image-slider2.jpg">}}

Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.

# Querverweise & Tweets

Lorem ipsum dolor sit amet, consectetuer [adipiscing elit][2]. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.

{{<tweet 666616452582129664>}}

Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.

# YouTube und Vimeo Videos

Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.

{{<youtube Av0JZvrTgxM>}}

Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.

{{<vimeo 146022717>}}

Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.

# Snippets, GitHub Gists und SpeakerDeck Folien

Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.

{{<code lang="java">}}
complete(task("edit"), withVariables("finished", true, "editor", "mary"));
{{</code>}}

{{<code lang="html">}}
<span class="abc">This is text</span>
{{</code>}}

Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.

{{<gist spf13 7896402>}}

Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.

{{<speakerdeck 9d632ed7641747ed8450f2b39346daf5>}}

Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.

# BPMN Prozessdiagramme mit Verweisen

Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.

{{<bpmn src="../src/insurance-recourse.bpmn" nr="intermediate_event_invoice_paid,task-book-payment">}}

{{<nr 1>}} Once the invoice is paid ...

{{<nr 2>}} ... you can (and should!) book the payment.

Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.

# DMN Entscheidungstabellen mit Verweisen

Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.

{{<dmn src="../src/customer-discount.dmn" nr="utilityColumn:long-time-gold,discount:short-time-bronze" annotations="false">}}

{{<nr 1>}} Obviously long time gold customers receive the highest discount...

{{<nr 2>}} ... so you don't want to be stuck here forever.

Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.

# CMMN Falldiagramme mit Verweisen

Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.

{{<cmmn src="../src/incident-management.cmmn" nr="investigate-problem-support,investigate-problem-2nd-level-support,investigate-problem-developer">}}

{{<nr 1>}} When investigating a customer problem, the support may decide to ...

{{<nr 2>}} ... involve the second level support ...

{{<nr 3>}} ... or to directly involve the developer.

Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.

[1]: http://camunda.org/ "Camunda BPM Platform"
[2]: http://camunda.org/ "Camunda BPM 7.4 Release Roadshow"
