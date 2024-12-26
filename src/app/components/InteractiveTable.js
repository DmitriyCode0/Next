"use client";

import React, { useState } from "react";
import "./interactive-table.css";

const tabs = [
  { id: "examples", label: "Приклади" },
  { id: "schemes", label: "Схеми" },
  { id: "passive-voice", label: "Схеми (Passive Voice)" },
  { id: "usage", label: "Вживання" },
  { id: "time-markers", label: "Часові маркери" },
];

const contentData = {
  examples: [
    {
      title: "Past Simple",
      text: `He finished his homework two days ago. Він закінчив домашнє завдання два дні тому.
        She didn’t call her friend last evening. Вона не подзвонила своєму другу вчора ввечері.
        Did they play football last Saturday? Вони грали у футбол минулої суботи?`,
    },
    {
      title: "Present Simple",
      text: `She visits her grandmother every Sunday. Вона відвідує свою бабусю кожної неділі.
        He doesn’t eat breakfast in the morning. Він не снідає вранці.
        Do they play tennis in the park every weekend? Вони грають у теніс у парку кожного вихідного?`,
    },
    {
      title: "Future Simple",
      text: `She will attend the meeting tomorrow at 10 AM. Вона буде на зустрічі завтра о 10 ранку.
        He won’t travel abroad next summer. Він не поїде за кордон наступного літа.
        Will they join us for dinner tonight? Вони приєднаються до нас на вечерю сьогодні ввечері?`,
    },
    {
      title: "Past Continuous",
      text: `He was reading a book when the phone rang. Він читав книгу, коли задзвонив телефон.
        She wasn’t watching TV at that moment. Вона не дивилася телевізор у той момент.
        Were they walking in the park all afternoon? Вони гуляли в парку весь день?`,
    },
    {
      title: "Present Continuous",
      text: `I am writing a letter right now. Я зараз пишу листа.
        He isn’t studying for his exam. Він не готується до іспиту.
        Are they having lunch at the moment? Вони зараз обідають?`,
    },
    {
      title: "Future Continuous",
      text: `I will be working at 5 PM tomorrow. Я працюватиму завтра о 5 вечора.
        She won’t be traveling during the holidays. Вона не подорожуватиме під час свят.
        Will they be waiting for us at the station? Вони будуть чекати нас на станції?`,
    },
    {
      title: "Past Perfect",
      text: `He had left before she arrived. Він пішов до того, як вона прийшла.
        She hadn’t finished her homework by the time the class started. Вона не закінчила домашнє завдання до початку уроку.
        Had they already eaten when you came? Вони вже поїли, коли ти прийшов?`,
    },
    {
      title: "Present Perfect",
      text: `I have visited Paris several times. Я був у Парижі кілька разів.
        He hasn’t seen this movie yet. Він ще не бачив цього фільму.
        Have they completed the project? Вони завершили проєкт?`,
    },
    {
      title: "Future Perfect",
      text: `She will have finished the report by next Monday. Вона закінчить звіт до наступного понеділка.
        He won’t have completed the book by tomorrow. Він не закінчить книгу до завтра.
        Will they have left by the time we arrive? Вони підуть до того, як ми приїдемо?`,
    },
    {
      title: "Past Perfect Continuous",
      text: `He had been waiting for two hours before the train arrived. Він чекав дві години, поки не прийшов поїзд.
        She hadn’t been studying long when she passed the test. Вона недовго вчилася, коли склала іспит.
        Had they been arguing all day before they agreed? Вони сперечалися весь день перед тим, як погодилися?`,
    },
    {
      title: "Present Perfect Continuous",
      text: `I have been reading this book all day. Я читаю цю книгу весь день.
        He hasn’t been feeling well lately. Останнім часом він погано почувається.
        Have they been working on this project for hours? Вони працюють над цим проєктом уже кілька годин?`,
    },
    {
      title: "Future Perfect Continuous",
      text: `By the end of the year, she will have been working here for 5 years. До кінця року вона працюватиме тут 5 років.
        He won’t have been waiting long before the meeting starts. Він недовго чекатиме до початку зустрічі.
        Will they have been traveling for months before they settle down? Вони подорожуватимуть місяцями перед тим, як оселитися?`,
    },
  ],
  schemes: [
    { title: "Past Simple", text: "👤 + Ved + ..." },
    { title: "Present Simple", text: "👤 + Vs + ..." },
    { title: "Future Simple", text: "👤 + will + V + ..." },
    { title: "Past Continuous", text: "👤 + was/were + Ving + ..." },
    { title: "Present Continuous", text: "👤 + is/am/are + Ving + ..." },
    { title: "Future Continuous", text: "👤 + will be + Ving + ..." },
    { title: "Past Perfect", text: "👤 + had + V3 + ..." },
    { title: "Present Perfect", text: "👤 + has/have + V3 + ..." },
    { title: "Future Perfect", text: "👤 + will have + V3 + ..." },
    { title: "Past Perfect Continuous", text: "👤 + had been + Ving + ..." },
    {
      title: "Present Perfect Continuous",
      text: "👤 + has/have been + Ving + ...",
    },
    {
      title: "Future Perfect Continuous",
      text: "👤 + will have been + Ving + ...",
    },
  ],
  "passive-voice": [
    { title: "Past Simple Passive", text: "👤 + was/were + V3 ..." },
    { title: "Present Simple Passive", text: "👤 + is/am/are + V3 ..." },
    { title: "Future Simple Passive", text: "👤 + will be + V3 ..." },
    { title: "Past Continuous Passive", text: "👤 + was/were being + V3 ..." },
    {
      title: "Present Continuous Passive",
      text: "👤 + is/am/are being + V3 ...",
    },
    {
      title: "Future Continuous Passive",
      text: "👤 + will be being + V3 (rarely used) ...",
    },
    { title: "Past Perfect Passive", text: "👤 + had been + V3 ..." },
    { title: "Present Perfect Passive", text: "👤 + has/have been + V3 ..." },
    { title: "Future Perfect Passive", text: "👤 + will have been + V3 ..." },
  ],
  usage: [
    { title: "Past Simple", text: "Actions completed in the past." },
    { title: "Present Simple", text: "Regular habits or universal truths." },
    {
      title: "Future Simple",
      text: "Planned or expected actions in the future.",
    },
    {
      title: "Past Continuous",
      text: "Actions in progress at a specific past time.",
    },
    { title: "Present Continuous", text: "Actions happening right now." },
    {
      title: "Future Continuous",
      text: "Actions ongoing at a specific time in the future.",
    },
    {
      title: "Past Perfect",
      text: "Actions completed before another past action.",
    },
    {
      title: "Present Perfect",
      text: "Actions completed at an unspecified time before now.",
    },
    {
      title: "Future Perfect",
      text: "Actions completed before a specific future moment.",
    },
    {
      title: "Past Perfect Continuous",
      text: "Actions ongoing before another past action.",
    },
    { title: "Present Perfect Continuous", text: "Actions ongoing up to now." },
    {
      title: "Future Perfect Continuous",
      text: "Actions ongoing up to a specific time in the future.",
    },
  ],
  "time-markers": [
    {
      title: "Past Simple",
      text: "Yesterday, last week, a month ago, in 1995, two days ago.",
    },
    {
      title: "Present Simple",
      text: "Every day, always, usually, sometimes, rarely, never.",
    },
    {
      title: "Future Simple",
      text: "Tomorrow, next week, in a year, soon, someday.",
    },
    {
      title: "Past Continuous",
      text: "While, when, at that moment, all day yesterday.",
    },
    {
      title: "Present Continuous",
      text: "Now, at the moment, currently, this week.",
    },
    {
      title: "Future Continuous",
      text: "At this time tomorrow, in two hours.",
    },
    {
      title: "Past Perfect",
      text: "Before, by the time, already, until then.",
    },
    { title: "Present Perfect", text: "Already, yet, so far, since, for." },
    {
      title: "Future Perfect",
      text: "By tomorrow, by next week, in five years.",
    },
    {
      title: "Past Perfect Continuous",
      text: "For two hours, before, until then.",
    },
    {
      title: "Present Perfect Continuous",
      text: "For two hours, since morning, all day.",
    },
    {
      title: "Future Perfect Continuous",
      text: "For three hours, by the time.",
    },
  ],
};

const InteractiveTable = () => {
  const [activeTab, setActiveTab] = useState("examples");

  return (
    <div className="interactive-table">
      {/* Tabs */}
      <div className="tab-container">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`tab ${activeTab === tab.id ? "active" : ""}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="table-container">
        {contentData[activeTab].map((item, index) => (
          <div className="table-section" key={index}>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InteractiveTable;
