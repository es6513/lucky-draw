import React from "react";
import { useSelector, useDispatch } from "react-redux";
import classnames from "classnames/bind";
import HeadTitle from "components/HeadTitle";
import Lists from "components/Lists";
import Avatar from "components/Avatar";
import styles from "./style.module.scss";

const cx = classnames.bind(styles);

function AttendLists() {
  //Redux Store
  const storeAttendLists = useSelector(
    (state) => state.listsReducer.attendLists
  );

  return (
    <div>
      <HeadTitle headTag="h3">參與抽獎名單</HeadTitle>
      <Lists className={cx("attend-lists")}>
        {storeAttendLists.map((person, index) => (
          <Lists.Item
            key={index}
            className={cx("lists-item")}
            prefix={
              <div>
                <Avatar
                  className={cx("lists-item__prefix")}
                  gender={person.gender}
                />
              </div>
            }
            suffix={<div>(Id:{person.id})</div>}
          >
            <div>{person.name}</div>
          </Lists.Item>
        ))}
      </Lists>
    </div>
  );
}

export default AttendLists;
