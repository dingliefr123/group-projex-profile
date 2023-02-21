import React, { useState } from "react";
import API, { Item } from "./data";

enum Status {
  INITIAL,
  PENDING,
  RSOLVED,
  REJECTED
}

function List({
  list,
  setItem,
  cur
}: {
  list: Item[];
  setItem: Function;
  cur: Item;
}) {
  if (!list.length) return <div>Rien de data</div>;

  return (
    <ul className="list-ul">
      {list.map((p) => {
        const isAct = p === cur;
        return (
          <li className={isAct ? "active" : ""} onClick={() => setItem(p)}>
            <img
              title={[p.firstName, p.lastName].join(" ")}
              alt=""
              src="/avatar.png"
            />
          </li>
        );
      })}
    </ul>
  );
}

function Top({ item }: { item: Item }) {
  return (
    <div className="top">
      <div className="avatar">
        <img src="/avatar.png" alt="" />
      </div>
      <div className="profile">
        <div className="name">
          {item.firstName} {item.lastName}
        </div>
        <div className="post-comp">
          <span>{item.post}</span>
          <span>-</span>
          <span>{item.company}</span>
        </div>
        <div className="phone">{item.phone}</div>
        <div className="mail">{item.email}</div>
      </div>
    </div>
  );
}

export default function Wrapper() {
  const [status, setStatus] = useState<Status>(Status.INITIAL);
  const [list, setList] = useState<Item[] | null>(null);
  const [item, setItem] = useState<Item | null>(null);
  React.useEffect(() => {
    setStatus(Status.PENDING);
    API.getList()
      .then((data) => {
        setList(data as Item[]);
        setStatus(Status.RSOLVED);
        setItem(data[0]);
      })
      .catch(() => {
        setStatus(Status.REJECTED);
      });
  }, [setList, setStatus, setItem]);

  if (status === Status.PENDING) return <div>Pending ...</div>;

  if (status === Status.REJECTED || !item || !list)
    return <div>Ouh, il y a d'erreur</div>;

  return (
    <div className="wrapper">
      <Top item={item} />
      <List list={list} setItem={setItem} cur={item} />
    </div>
  );
}
