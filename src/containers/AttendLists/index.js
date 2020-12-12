import React, { useRef } from "react";
import { useSelector } from "react-redux";
import classnames from "classnames/bind";
import HeadTitle from "components/HeadTitle";
import Lists from "components/Lists";
import Avatar from "components/Avatar";
import styles from "./style.module.scss";

const cx = classnames.bind(styles);

const listKeys = ["Avatar", "Name", "Number"];

function AttendLists() {
  //Redux Store
  const storeAttendLists = useSelector(
    (state) => state.listsReducer.attendLists
  );
  return (
    <div>
      <HeadTitle headTag="h3">參與抽獎名單</HeadTitle>
      <div>
        <Lists className={cx("attend-lists")}>
          <Lists.Item className={cx("lists-item", "lists-item__title")}>
            {listKeys.map((listKey, index) => (
              <div key={index}>{listKey}</div>
            ))}
          </Lists.Item>
          {storeAttendLists.map((person, index) => (
            <Lists.Item key={index} className={cx("lists-item")}>
              <div>
                <Avatar
                  className={cx("lists-item__avatar")}
                  gender={person.gender}
                />
              </div>
              <div>{person.name}</div>
              <div>{person.id + 1}</div>
            </Lists.Item>
          ))}
        </Lists>
      </div>
    </div>
  );
}

export default React.memo(AttendLists);
