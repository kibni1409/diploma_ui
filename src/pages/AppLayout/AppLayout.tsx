import { NavLink, Outlet } from 'react-router-dom';
import React, { useState } from 'react';
import { Button, Drawer } from 'antd';
import styles from './styles.module.scss';
import { getCodeEditor, getMultiList, getQuestions } from '../../app/GetRouting/GetRouting';

const AppLayout = () => {

  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <div className={styles.app}>
      <Button
        type="default"
        onClick={showDrawer}
        className={styles.btnDrawer}
      >
        Open
      </Button>
      <Drawer
        title="Меню"
        placement={'left'}
        closable={false}
        onClose={onClose}
        open={open}
      >
        <NavLink
          className={styles.link}
          to={getCodeEditor()}
          onClick={onClose}
        >
          Редактор кода
        </NavLink>
        <NavLink
          className={styles.link}
          to={getQuestions()}
          onClick={onClose}
        >
          Теория
        </NavLink>
        <NavLink
          className={styles.link}
          to={getMultiList()}
          onClick={onClose}
        >
          Мультимедия
        </NavLink>
      </Drawer>
      <Outlet/>
    </div>
  )
}

export default AppLayout