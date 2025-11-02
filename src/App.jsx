import React from "react";

const travels = [
  {
    country: "JAPAN",
    title: "Mount Fuji",
    dates: "12 Jan, 2021 - 24 Jan, 2021",
    desc: "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan.",
    img: "https://scrimba.com/links/travel-journal-japan-image-url"
  },
  {
    country: "AUSTRALIA",
    title: "Sydney Opera House",
    dates: "27 May, 2021 - 8 Jun, 2021",
    desc: "The Sydney Opera House is a multi-venue performing arts centre in Sydney, located on the banks of the Sydney Harbour.",
    img: "https://scrimba.com/links/travel-journal-australia-image-url"
  },
  {
    country: "NORWAY",
    title: "Geirangerfjord",
    dates: "01 Oct, 2021 - 18 Nov, 2021",
    desc: "The Geiranger Fjord is a fjord in the Sunnmøre region of Møre og Romsdal county, Norway.",
    img: "https://scrimba.com/links/travel-journal-norway-image-url"
  }
];

function Card({ item }) {
  return (
    <div className="card">
      <img src={item.img} alt={item.title} className="card-image" />
      <div className="card-body">
        <div className="card-country">{item.country} <span className="google-link">View on Google Maps</span></div>
        <h2 className="card-title">{item.title}</h2>
        <div className="card-dates">{item.dates}</div>
        <p className="card-desc">{item.desc}</p>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="app">
      <header className="topbar">
        <div className="logo">my travel journal.</div>
      </header>
      <main className="content">
        {travels.map((t, i) => <Card key={i} item={t} />)}
      </main>
    </div>
  );
}
