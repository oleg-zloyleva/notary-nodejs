import React from "react";
import styled from "styled-components";

import {SideBarUserMenuItem} from "../SideBarUserMenuItem";
import { Personal } from "./icons/Personal";
import { Contacts } from "./icons/Contacts";
import { Ask } from "./icons/Ask";
import {Docs} from "./icons/Docs";
import {Letter} from "./icons/Letter";
import {Password} from "./icons/Password";
import {Notification} from "./icons/Notification";
import {Service} from "./icons/Service";

const SideBarUserWrapper = styled('div')`
  background: #E9E9E9;
  width: 260px;
`;

const SideBarUserMenuWrapper = styled('ul')`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const SideBarUserComponent = () => (
  <SideBarUserWrapper>
      <SideBarUserMenuWrapper>
        <SideBarUserMenuItem path="personal" Icon={Personal} title="Персональні дані" />
        <SideBarUserMenuItem path="contacts" Icon={Contacts} title="Контакти" />
        <SideBarUserMenuItem path="asks" Icon={Ask} title="Запити" />
        <SideBarUserMenuItem path="docs" Icon={Docs} title="Документи" />
        <SideBarUserMenuItem path="letters" Icon={Letter} title="Листи" />
        <SideBarUserMenuItem path="password" Icon={Password} title="Пароль" />
        <SideBarUserMenuItem path="notification" Icon={Notification} title="Повідомлення" />
        <SideBarUserMenuItem path="services" Icon={Service} title="Послуги" />
      </SideBarUserMenuWrapper>
  </SideBarUserWrapper>
);

export { SideBarUserComponent };
