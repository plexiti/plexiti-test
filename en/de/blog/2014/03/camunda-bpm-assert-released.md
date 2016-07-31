---
title: Camunda BPM Assert 1.0 verfügbar!
description: "
    Seit einiger Zeit schon experimentieren wir mit Assertions für Camunda
    BPM - rechtzeitig zum 1. Geburtstag ist nun eine stabile Version verfügbar.
"
date: 2014-03-03
author: Martin Schimak
draft: false
categories:
    - Camunda
    - BPMN
    - Assert
---

Die kleine Community Extension "camunda-bpm-assert" möchte es ein grosses Stück einfacher machen Tests für BPMN Prozessdefinitionen zu schreiben und diese gegen [camunda BPM](http://camunda.org) auszuführen. Dazu wird - basierend auf Joel Costigliola's [AssertJ](http://joel-costigliola.github.io/assertj/) - ein Set an Process Engine Assertions zur Verfügung gestellt. Diese können sowohl mit JUnit, aber auch in völlig anderen Testumgebungen eingesetzt werden. Außerdem unterstützt eine Reihe an kleinen Helper-Methoden bei der Navigation durch den zu testenden Prozesspfad. **Das Motto: besser lesbarer Code - weniger Spaghetti Tests!**

![Less Spaghetti Tests](../img/camunda-bpm-assert-released.png)

Urspünglich eine gemeinsam von [Rafael Cordones](http://rafael.cordones.me) und mir in die Welt gesetzte und von Jan Galinski und Simon Zambrovski (beide [Holisticon](http://www.holisticon.de)) tatkräftig unterstützte Idee, konnte ich mir nun die nötige Zeit nehmen, den experimentellen Code auf den Kern zu reduzieren und vor allem zu testen: "Never forget to test the test code!" :-) Das Ergebnis ist nun zugänglich über camundas maven repo als

# camunda-bpm-assert 1.0

Man benötigt lediglich einen statischen Import…

	import static org.camunda.bpm.engine.test.assertions.ProcessEngineTests.*;

… und kann schon damit loslegen neue Tests zu schreiben oder bestehende Tests zu ändern. Es gibt aber keinen Zwang, einer bestimmten Test-"Philosophie" zu folgen oder bestehende Tests in einem Schritt zu "migrieren". "Mix and match it" as you like, zB um eine Map an Prozessvariablen zu übergeben:

	ProcessInstance pi = runtimeService().startProcessInstanceByKey(
      "camunda-testing-job-announcement",
      withVariables("jobAnnouncementId", jobAnnouncement.getId())
    );

![Zu testende Prozess Instanz](../img/process-instance-under-test.png)

Möchte man zB sicherstellen, dass diese hier gezeigte Prozessinstanz

 * wirklich gestartet wurde…
 * … nun beim User Task "edit" wartet…
 * … und einer bestimmten Gruppe, aber noch keiner konkreten Person zugeordnet wurde…

so schreibt man

    assertThat(pi).isStarted()
      .task("edit").hasCandidateGroup("hr-staff").isNotAssigned();

Möchte man diesen Task nun zuweisen und abschliessen, so kann man dafür einige der Helper Methoden nutzen:

    claim(task("edit"), "mary");
    complete(task("edit"), withVariables("finished", true, "editor", "mary"));

Für diejenigen, die sich hier am Kopf kratzen sollten: die Library merkt sich dazu die letzte Prozess Instanz, auf der in diesem konkreten Test eine Assertion durchgeführt wurde. Es ist aber auch möglich, komplexere Tests mit mehreren "kollaborierenden" Prozessinstanzen durchzuführen und die jeweils benötigte Instanz den Helper Methoden explizit mitzugeben:

    claim(task("edit", pi), "mary");

# Fork me on GitHub!

Ein kompletter **[User Guide](https://github.com/camunda/camunda-bpm-assert/blob/master/camunda-bpm-assert/README.md)** mit allen derzeit zur Verfügung stehenden Assertions und Helper Methoden ist online abrufbar. Worauf also warten?-) **[Get started](https://github.com/camunda/camunda-bpm-assert#getting-started)** and… enjoy your upgraded pasta!
