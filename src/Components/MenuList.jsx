import React from 'react'
import {Menu} from 'antd';
import { PlusSquareOutlined,HistoryOutlined} from "@ant-design/icons";
import { FaRegBookmark } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { RiLogoutBoxLine } from "react-icons/ri";

const MenuList = () => {
  return (

    <Menu className="custom-menu" theme='dark' mode='inline'>
        <Menu.Item key='NewChat' icon={<PlusSquareOutlined />}>New chat </Menu.Item> 
        <Menu.SubMenu key='History' icon={<HistoryOutlined />} title='History' className="submenu-scroll">
           <Menu.Item key="His1">Histrory 1</Menu.Item>
           <Menu.Item key="His2">Histrory 2</Menu.Item>
           <Menu.Item key="His3">Histrory 3</Menu.Item>
           <Menu.Item key="His4">Histrory 4</Menu.Item>
        </Menu.SubMenu> 
        <Menu.Item key='BookMarks' icon={<FaRegBookmark />}>Bookmark </Menu.Item>  
        <Menu.Item key='Settings' icon={<IoSettingsOutline />}>Settings </Menu.Item>  
        <Menu.Item key='LogOut' icon={<RiLogoutBoxLine />}>Logout</Menu.Item>  
    </Menu>
  )
}

export default MenuList





