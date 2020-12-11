import React from "react";
import { useSelector, useDispatch } from "react-redux";

import HeadTitle from "../components/HeadTitle";
import Lists from "../components/Lists";
import Avatar from "../components/Avatar";

import { config } from "../config";
const { css } = config;
const { ROOT_CLASS } = css;

function AttendLists() {
  //Redux Store
  const storeAttendLists = useSelector(
    (state) => state.listsReducer.attendLists
  );

  return (
    <div className={`${ROOT_CLASS}__attend-lists`}>
      <HeadTitle headTag="h3">參與抽獎名單</HeadTitle>
      <Lists>
        {storeAttendLists.map((person, index) => (
          <Lists.Item key={index} prefix={<Avatar gender={person.gender} />}>
            {person.name}
          </Lists.Item>
        ))}
      </Lists>
    </div>
  );
}

export default AttendLists;
