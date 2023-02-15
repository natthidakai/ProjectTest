import React, {useState} from 'react'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from 'react-bootstrap/Button';
import { GiHamburgerMenu } from 'react-icons/gi';
import {NavLink, Link} from 'react-router-dom'
import { useLocation } from "react-router-dom";

import Profile from '../image/cat.jpg'
import Image from 'react-bootstrap/Image';


const handleSelect = (selectedKey) => {
  alert(`selected ${selectedKey}`);
}

const Slidebar = () => {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");

  return (

    <>

        <Col lg="2" xl="2" className='display-Desktop box-sildebar p-0'>
          <Row className='p-3'>
            <Col xl="3"><Image src={Profile} className="profile"/></Col>
            <Col style={{display: "flex", alignItems: "center"}}><h6 className='mb-0'>โรงพยาบาลตัวอย่าง</h6></Col>
          </Row>
          <ul>
            <li className={splitLocation[1] === "" ? "active" : ""}>
              <Link to='/' className='px-3 py-1'>กลับเมนูหลัก</Link>
            </li>
            <li className={splitLocation[1] === "menu2" ? "active" : ""}>
              <Link to='/menu2' className='px-3 py-1'>งานบริหารทรัพย์สิน</Link>
            </li>
            <li className={splitLocation[1] === "menu2" ? "active" : ""}>
              <Link to="/menu2/1" className='px-4 py-2'>Dashboard</Link>
            </li>
            <li className={splitLocation[1] === "menu2" ? "active" : ""}>
              <Link to="/menu2/2" className='px-4 py-2'>ข้อมูลครุภัณฑ์</Link>
            </li>
            <li className={splitLocation[1] === "menu2" ? "active" : ""}>
              <Link to="/menu2/3" className='px-4 py-2'>ข้อมูลครุภัณฑ์เป็นชุด</Link>
            </li>
            <li className={splitLocation[1] === "menu3" ? "active" : ""}>
              <Link to="/menu3" className='px-4 py-2'>เบิกครุภัณฑ์</Link>
            </li>
            <li className={splitLocation[1] === "menu3" ? "active" : ""}>
              <Link to="/menu3/1" className='px-5 py-2'>รายการเบิกจ่ายครุภัณฑ์</Link>
            </li>
            <li className={splitLocation[1] === "menu3" ? "active" : ""}>
              <Link to="/menu3/2" className='px-5 py-2'>บันทึกเบิกจ่ายครุภัณฑ์</Link>
            </li>
            <li className={splitLocation[1] === "menu3" ? "active" : ""}>
              <Link to="/menu3/3" className='px-5 py-2'>อนุมัติเบิกจ่ายครุภัณฑ์</Link>
            </li>

            <li className={splitLocation[1] === "menu4" ? "active" : ""}>
              <Link to="/menu4" className='px-4 py-2'>ยืม-คืน ครุภัณฑ์</Link>
            </li>
            <li className={splitLocation[1] === "menu4" ? "active" : ""}>
              <Link to="/menu4/1" className='px-5 py-2'>รายการยืม-คืน ครุภัณฑ์</Link>
            </li>
            <li className={splitLocation[1] === "menu4" ? "active" : ""}>
              <Link to="/menu4/2" className='px-5 py-2'>บันทึกยืม-คืน ครุภัณฑ์</Link>
            </li>
            <li className={splitLocation[1] === "menu4" ? "active" : ""}>
              <Link to="/menu4/3" className='px-5 py-2'>อนุมัติยืม-คืน ครุภัณฑ์</Link>
            </li>
            <li className={splitLocation[1] === "menu4" ? "active" : ""}>
              <Link to="/menu4/4" className='px-5 py-2'>บันทึกยืม-คืน ครุภัณฑ์</Link>
            </li>

            <li className={splitLocation[1] === "menu5" ? "active" : ""}>
              <Link to="/menu5" className='px-4 py-2'>โอนครุภัณฑ์/ย้ายสถานที่ตั้ง</Link>
            </li>
            <li className={splitLocation[1] === "menu5" ? "active" : ""}>
              <Link to="/menu5/1" className='px-5 py-2'>รายการโอนครุภัณฑ์/ย้ายสถานที่ตั้ง</Link>
            </li>
            <li className={splitLocation[1] === "menu5" ? "active" : ""}>
              <Link to="/menu5/2" className='px-5 py-2'>บันทึกโอนครุภัณฑ์/ย้ายสถานที่ตั้ง</Link>
            </li>
            <li className={splitLocation[1] === "menu5" ? "active" : ""}>
              <Link to="/menu5/3" className='px-5 py-2'>อนุมัติโอนครุภัณฑ์/ย้ายสถานที่ตั้ง</Link>
            </li>

            <li className={splitLocation[1] === "menu6" ? "active" : ""}>
              <Link to="/menu6" className='px-4 py-2'>งานซ่อม</Link>
            </li>
            <li className={splitLocation[1] === "menu6" ? "active" : ""}>
              <Link to="/menu6/1" className='px-5 py-2'>Dashboard งานซ่อม</Link>
            </li>
            <li className={splitLocation[1] === "menu6" ? "active" : ""}>
              <Link to="/menu6/2" className='px-5 py-2'>เพิ่มการซ่อมบำรุง</Link>
            </li>
            <li className={splitLocation[1] === "menu6" ? "active" : ""}>
              <Link to="/menu6/3" className='px-5 py-2'>ลงบันทึกรายละเอียดการซ่อม</Link>
            </li>
            <li className={splitLocation[1] === "menu6" ? "active" : ""}>
              <Link to="/menu6/4" className='px-5 py-2'>บันทึกจ้างซ่อมภายนอก</Link>
            </li>
            <li className={splitLocation[1] === "menu6" ? "active" : ""}>
              <Link to="/menu6/5" className='px-5 py-2'>ตรวจสอบการจ้างภายนอก</Link>
            </li>
            <li className={splitLocation[1] === "menu6" ? "active" : ""}>
              <Link to="/menu6/6" className='px-5 py-2'>ประวัติการซ่อม</Link>
            </li>
          </ul> 
        </Col>


      <div className='display-Mobile p-0'>
        <Col xs="12" md="12" className='box-sildebar p-3' style={{justifyContent: "end", display: "flex"}}>
          <Button variant="outline-dark" className='col-xs-3 col-md-2' onClick={handleShow} style={{display: "flex", alignItems: "center",  justifyContent: "space-between"}}><GiHamburgerMenu/> Menu</Button>
          <Offcanvas show={show} onHide={handleClose} className='box-sildebar'>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>
                <Row className='p-3'>
                  <Col xs="3"><Image src={Profile} className="profile"/></Col>
                  <Col style={{display: "flex", alignItems: "center"}}><h6 className='mb-0'>โรงพยาบาลตัวอย่าง</h6></Col>
                </Row>
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className='p-0'>
              <ul>
                <li className={splitLocation[1] === "" ? "active" : ""}>
                  <Link to='/' className='px-3 py-1'>กลับเมนูหลัก</Link>
                </li>
                <li className={splitLocation[1] === "menu2" ? "active" : ""}>
                  <Link to='/menu2' className='px-3 py-1'>งานบริหารทรัพย์สิน</Link>
                </li>
                <li className={splitLocation[1] === "menu2" ? "active" : ""}>
                  <Link to="/menu2/1" className='px-4 py-2'>Dashboard</Link>
                </li>
                <li className={splitLocation[1] === "menu2" ? "active" : ""}>
                  <Link to="/menu2/2" className='px-4 py-2'>ข้อมูลครุภัณฑ์</Link>
                </li>
                <li className={splitLocation[1] === "menu2" ? "active" : ""}>
                  <Link to="/menu2/3" className='px-4 py-2'>ข้อมูลครุภัณฑ์เป็นชุด</Link>
                </li>
                <li className={splitLocation[1] === "menu3" ? "active" : ""}>
                  <Link to="/menu3" className='px-4 py-2'>เบิกครุภัณฑ์</Link>
                </li>
                <li className={splitLocation[1] === "menu3" ? "active" : ""}>
                  <Link to="/menu3/1" className='px-5 py-2'>รายการเบิกจ่ายครุภัณฑ์</Link>
                </li>
                <li className={splitLocation[1] === "menu3" ? "active" : ""}>
                  <Link to="/menu3/2" className='px-5 py-2'>บันทึกเบิกจ่ายครุภัณฑ์</Link>
                </li>
                <li className={splitLocation[1] === "menu3" ? "active" : ""}>
                  <Link to="/menu3/3" className='px-5 py-2'>อนุมัติเบิกจ่ายครุภัณฑ์</Link>
                </li>

                <li className={splitLocation[1] === "menu4" ? "active" : ""}>
                  <Link to="/menu4" className='px-4 py-2'>ยืม-คืน ครุภัณฑ์</Link>
                </li>
                <li className={splitLocation[1] === "menu4" ? "active" : ""}>
                  <Link to="/menu4/1" className='px-5 py-2'>รายการยืม-คืน ครุภัณฑ์</Link>
                </li>
                <li className={splitLocation[1] === "menu4" ? "active" : ""}>
                  <Link to="/menu4/2" className='px-5 py-2'>บันทึกยืม-คืน ครุภัณฑ์</Link>
                </li>
                <li className={splitLocation[1] === "menu4" ? "active" : ""}>
                  <Link to="/menu4/3" className='px-5 py-2'>อนุมัติยืม-คืน ครุภัณฑ์</Link>
                </li>
                <li className={splitLocation[1] === "menu4" ? "active" : ""}>
                  <Link to="/menu4/4" className='px-5 py-2'>บันทึกยืม-คืน ครุภัณฑ์</Link>
                </li>

                <li className={splitLocation[1] === "menu5" ? "active" : ""}>
                  <Link to="/menu5" className='px-4 py-2'>โอนครุภัณฑ์/ย้ายสถานที่ตั้ง</Link>
                </li>
                <li className={splitLocation[1] === "menu5" ? "active" : ""}>
                  <Link to="/menu5/1" className='px-5 py-2'>รายการโอนครุภัณฑ์/ย้ายสถานที่ตั้ง</Link>
                </li>
                <li className={splitLocation[1] === "menu5" ? "active" : ""}>
                  <Link to="/menu5/2" className='px-5 py-2'>บันทึกโอนครุภัณฑ์/ย้ายสถานที่ตั้ง</Link>
                </li>
                <li className={splitLocation[1] === "menu5" ? "active" : ""}>
                  <Link to="/menu5/3" className='px-5 py-2'>อนุมัติโอนครุภัณฑ์/ย้ายสถานที่ตั้ง</Link>
                </li>

                <li className={splitLocation[1] === "menu6" ? "active" : ""}>
                  <Link to="/menu6" className='px-4 py-2'>งานซ่อม</Link>
                </li>
                <li className={splitLocation[1] === "menu6" ? "active" : ""}>
                  <Link to="/menu6/1" className='px-5 py-2'>Dashboard งานซ่อม</Link>
                </li>
                <li className={splitLocation[1] === "menu6" ? "active" : ""}>
                  <Link to="/menu6/2" className='px-5 py-2'>เพิ่มการซ่อมบำรุง</Link>
                </li>
                <li className={splitLocation[1] === "menu6" ? "active" : ""}>
                  <Link to="/menu6/3" className='px-5 py-2'>ลงบันทึกรายละเอียดการซ่อม</Link>
                </li>
                <li className={splitLocation[1] === "menu6" ? "active" : ""}>
                  <Link to="/menu6/4" className='px-5 py-2'>บันทึกจ้างซ่อมภายนอก</Link>
                </li>
                <li className={splitLocation[1] === "menu6" ? "active" : ""}>
                  <Link to="/menu6/5" className='px-5 py-2'>ตรวจสอบการจ้างภายนอก</Link>
                </li>
                <li className={splitLocation[1] === "menu6" ? "active" : ""}>
                  <Link to="/menu6/6" className='px-5 py-2'>ประวัติการซ่อม</Link>
                </li>
              </ul>
            </Offcanvas.Body>
          </Offcanvas>
        </Col>
      </div>
    </>
        // <ul
        //     className="nav nav-pills nav-sidebar flex-column"
        //     data-widget="treeview"
        //     role="menu"
        //     data-accordion="false"
        // >
        //     <li className="nav-item has-treeview menu-open">
        //         <Link
        //             id="dashboard"
        //             to="/dashboard"
        //             className={activeMenu == 'dashboard' ? 'active nav-link' : 'nav-link'}
        //             onClick={() => { setActiveMenu('dashboard') }}
        //         >
        //             <i className="nav-icon fa fa-home"></i>
        //             <p>Dashboard</p>
        //         </Link>
        //     </li>
        //     <li className="nav-item has-treeview menu-open">
        //         <Link
        //             id="review"
        //             to="/review"
        //             className={activeMenu == 'review' ? 'active nav-link' : 'nav-link'}
        //             onClick={() => { setActiveMenu('review') }}
        //         >
        //             <i className="nav-icon fa fa-comments"></i>
        //             <p>Reviews</p>
        //         </Link>
        //     </li>
        // </ul>
    )
}
export default Slidebar