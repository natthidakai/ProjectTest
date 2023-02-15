import React, { useState } from 'react';
import DateTimePicker from 'react-datetime-picker';
import TableRows from "../components/tableRows"


import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Profile from '../image/cat.jpg'
import { FaSearch } from 'react-icons/fa';
import { GrDocumentText } from 'react-icons/gr';
import { BsCheckCircle } from 'react-icons/bs';
import { AiOutlineCloseCircle} from 'react-icons/ai';
import { BsPrinter} from 'react-icons/bs';
import { GrNotification} from 'react-icons/gr';

const Pdata = ({id, date, time, name}) => {
  return(
    <div className='p-3'>
      <div className='box-pending'>
        <Row>
          <Col xl="6" className='justify-content-space-between'>
            <span className='font-green'>เลขที่ใบเบิก</span><span>{id}</span>
          </Col>
          <Col xl="6" className='text-right'>
            <span>{date} {time}</span>
          </Col>
          <Col xl="9" className='justify-content-space-between'>
            <span className='font-green'>หน่วยงานที่เสนอ</span><span>{name}</span>
          </Col>
        </Row>
        <hr className='my-2'/>
        <div className='text-right'>
          <button className='mx-2 btn-reject'>Reject</button>
          <button className='mx-2 btn-approval'>อนุมัติ</button>
        </div>
      </div>
    </div>
  )
}

const Home = () => {
  
  const [value, onChange] = useState(new Date());
  const [rowsData, setRowsData] = useState([1]);

  const data = [
    {id:"1277", date:"11/03/201", time:"18.00", name:"xxxx xxxxxxxx"},
    {id:"1278", date:"11/03/201", time:"18.00", name:"xxxx xxxxxxxx"},
    {id:"1279", date:"11/03/201", time:"18.00", name:"xxxx xxxxxxxx"}
  ]
  
  const addTableRows = ()=>{
    const rowsInput={
      noProduct:'',
      idProduct:'',
      nameProduct:'',
      SerialNo:'',
      ownerProduct:'' ,
      quantity:'',
      amount:'' 
    } 
    setRowsData([...rowsData, rowsInput])
  }

  const deleteTableRows = (index)=>{
    const rows = [...rowsData];
    rows.splice(index, 1);
    setRowsData(rows);
  }

  const handleChange = (index, evnt)=>{
    const {noProduct, value } = evnt.target;
    const rowsInput = [...rowsData];
    rowsInput[index][noProduct] = value;
    setRowsData(rowsInput);
  }

  return (
    <Col lg="12" xl="10" className="p-0 box-body">


      <div className='bg-white'>
        <Row className='px-3 align-items-center'>
          <Col md="5" lg="4" xl="3">
            <InputGroup className="my-3">
              <Form.Control type="search" placeholder="ID ใบเบิกจ่ายครุภัณฑ์" aria-label="Search"/>
              <Button variant="" id="button-addon2" className='btn-search'><FaSearch/></Button>
            </InputGroup>
          </Col>

          <Col xs="12" md="7" lg="8" xl="9" className=''>
            <Row className='align-items-center'>
              <Col xs="4" md="5" lg="8" xl="9" className='noti'>
                <span className='px-2'><GrNotification/></span>
                <span className='px-2'><GrNotification/></span>
                <span className='px-2'><GrNotification/></span>
              </Col>
              <Col xs="8" md="7" lg="4" xl="3">
                <Row className='align-items-center'>
                  <Col className='text-right'>xxxxx xxxxxxxxx</Col>
                  <Col xs="4" md="4" lg="5" xl="4" className='text-right'><Image src={Profile} className="profile"/></Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
        <hr className='my-2'/>
        <h4 className='pb-3 px-3 font-title'>อนุมัติเบิกจ่ายครุภัณฑ์</h4>
      </div>

      <Col xl="12" className='p-2'>
        <div className='bg-white redius-2'>
          <Row className='align-items-center p-2'>
            <Col md="12" lg="3" xl="3" className='mb-font-title'>
              <h5 className='mb-0 font-title'>รายการเสนออนุมัติประจำวัน</h5>
            </Col>
            <Col md="4" lg="3" xl="3">
              <DateTimePicker onChange={onChange} value={value} format={"dd MMMM y"} disableClock={true} clearIcon/>
            </Col>
            <Col md="4" lg="3" xl="3">
              <InputGroup>
                <Form.Control placeholder="หน่วยงานที่เสนอ รหัส P4P" />
                <InputGroup.Checkbox aria-label=""/>
              </InputGroup>  
            </Col>
            <Col md="4" lg="3" xl="3">
              <InputGroup>
                <Form.Control placeholder="ดูทั้งหมด" />
                <InputGroup.Checkbox aria-label=""/>
              </InputGroup>
            </Col>
          </Row>
          
          <hr className='my-2'/>

          <Row className='m-2 pb-2'>
            <Col xs="12" md="3" lg="3" xl="2">
              <button className='btn-status'>
                <Row>
                  <Col xs="6" md="7" lg="8" xl="8" className='text-btn-left'><GrDocumentText/> ทั้งหมด</Col>
                  <Col xs="5" md="5" lg="4" xl="4" style={{textAlign: "right"}}><strong>5</strong></Col>
                </Row>
              </button>
            </Col>
            <Col xs="12" md="3" lg="3" xl="2">
              <button className='btn-status'>
                <Row>
                  <Col xs="6" md="7" lg="8" xl="8" className='text-btn-left'><GrDocumentText/> รออนุมัติ</Col>
                  <Col xs="5" md="5" lg="4" xl="4" style={{textAlign: "right"}}><strong>5</strong></Col>
                </Row>
              </button>
            </Col>
            <Col xs="12" md="3" lg="3" xl="2">
              <button className='btn-status'>
                <Row>
                  <Col xs="7" md="8" lg="8" xl="8" className='text-btn-left'><BsCheckCircle/> อนุมัติแล้ว</Col>
                  <Col xs="4" md="4" lg="4" xl="4" style={{textAlign: "right"}}><strong>5</strong></Col>
                </Row>
              </button>
            </Col>
            <Col xs="12" md="3" lg="3" xl="2">
              <button className='btn-status'>
                <Row>
                  <Col xs="6" md="7" lg="8" xl="8" className='text-btn-left'><AiOutlineCloseCircle/>Reject</Col>
                  <Col xs="5" md="5" lg="4" xl="4" style={{textAlign: "right"}}><strong>5</strong></Col>
                </Row>
              </button>
            </Col>
          </Row>          
        </div>

        <Row> 
          <Col md="5" lg="4" xl="4">
            <div className='bg-white redius-2 box-detail'>
              <h5 className='font-title p-3'>รายการเสนออนุมัติ</h5>
              <hr className='m-0'/>

                
                {data.map((e)=>{
                  return <Pdata {...e}/>
                })}


              {/* <div className='p-3'>
                <div className='box-pending'>
                  <Row>
                    <Col xl="6" className='justify-content-space-between'>
                    
                      <span className='font-green'>เลขที่ใบเบิก</span><span></span>
                    </Col>
                    <Col xl="6" className='text-right'>
                      <span>13/04/2566 18.00</span>
                    </Col>
                    <Col xl="9" className='justify-content-space-between'>
                      <span className='font-green'>หน่วยงานที่เสนอ</span><span>xxxxx xxxxxxxx</span>
                    </Col>
                  </Row>
                  <hr className='my-2'/>
                  <div className='text-right'>
                    <button className='mx-2 btn-reject'>Reject</button>
                    <button className='mx-2 btn-approval'>อนุมัติ</button>
                  </div>
                </div>
              </div>*/}
            </div> 
          </Col>

          <Col md="7" lg="8" xl="8" className='bg-white redius-2 p-0'>
            <div className='p-3'>
              <Row>
                <Col md="12" lg="6" xl="8">
                  <h5 className='font-title'>รายการรอขออนุมัติเบิกจ่ายครุภัณฑ์</h5>
                </Col>
                <Col xs="6" md="6" lg="3" xl="2">
                  <button className='btn-green'>ดูรายละเอียด</button>
                </Col>
                <Col xs="6" md="6" lg="3" xl="2">
                  <button className='btn-green'><BsPrinter/> พิมพ์</button>
                </Col>
              </Row>
            </div>
              
            <hr className='m-0'/>

            <p className='text-title px-3 pt-3'>บันทึกใบเบิกครุภัณฑ์</p>
            <hr className='m-0'/>

            <div className='py-3 display-Mobile'>
              <Col className='mb-3'>
                <label className='add-detail-lable'>ID ใบเบิก</label>
                <input type="text" className='mx-3 add-detail-input' placeholder=''/>
              </Col>

              <Col className='mb-3'>
                <label className='add-detail-lable'>เลขที่ใบเบิกเงิน</label>
                <input type="text" className='mx-3 add-detail-input' placeholder=''/>
              </Col>

              <Col className='mb-3'>
                <label className='add-detail-lable'>ทะเบียนเอกสาร</label>
                <input type="text" className='mx-3 add-detail-input' placeholder=''/>
              </Col>

              <Col className='mb-3'>
                <label className='add-detail-lable'>หน่วยงาน</label>
                  <Form.Select aria-label="Default select example" className='mx-3 add-detail-input'>
                    <option value="">เลือกหน่วยงาน</option>
                    <option value="1">หน่วยงานที่ 1</option>
                    <option value="2">หน่วยงานที่ 2</option>
                    <option value="3">หน่วยงานที่ 3</option>
                  </Form.Select>
              </Col>

              <Col className='mb-3'>
                <label className='add-detail-lable'>ผู้มีสิธิ์เบิก</label>
                <input type="text" className='mx-3 add-detail-input' placeholder=''/>
              </Col>

              <Col className='mb-3'>
                <label className='add-detail-lable'>วันที่เบิก</label>
                <DateTimePicker onChange={onChange} value={value} format={"dd MMMM y"} disableClock={true} clearIcon className='date'/>
              </Col>

              <Col className='mb-3' style={{display: "flex"}}>
                <label className='add-detail-lable'>หน่วยงาน</label>
                <textarea rows="3" className='mx-3 add-detail-textarea' placeholder=''/>
              </Col>

              <Col className='mb-3' style={{display: "flex"}}>
                <label className='add-detail-lable'>จำนวนเงิน</label>
                <input type="number" className='mx-3 input-money' placeholder=''/>
                <label>บาท</label>
              </Col>

              <Col className=''>
                <label className='add-detail-lable'>เลือกปีงบประมาณ</label>
                <Form.Select aria-label="Default select example" className='mx-3 add-detail-input'>
                    <option value="">เลือกปีงบประมาณ</option>
                    <option value="2563">2563</option>
                    <option value="2564">2564</option>
                    <option value="2565">2565</option>
                  </Form.Select>
              </Col>

            </div>

            <hr className='display-Mobile'/>

            <div className='box-add-detail py-3 display-Desktop'>
              <div className='display-flex'>
                <div className='display-inline-flex'>
                  <label className='add-detail-lable'>ID ใบเบิก</label>
                  <input type="text" className='mx-3 add-detail-input' placeholder=''/>
                </div>

                <div className='display-inline-flex'>
                  <label className='add-detail-lable'>เลขที่ใบเบิกเงิน</label>
                  <input type="text" className='mx-3 add-detail-input' placeholder=''/>
                </div>

                <div className='display-inline-flex'>
                  <label className='add-detail-lable'>ทะเบียนเอกสาร</label>
                  <input type="text" className='mx-3 add-detail-input' placeholder=''/>
                </div>
              </div>

              <div className='display-flex'>
                <div className='display-inline-flex'>
                  <label className='add-detail-lable'>หน่วยงาน</label>
                  <Form.Select aria-label="Default select example" className='mx-3 add-detail-input'>
                    <option>เลือกหน่วยงาน</option>
                    <option value="1">หน่วยงานที่ 1</option>
                    <option value="2">หน่วยงานที่ 2</option>
                    <option value="3">หน่วยงานที่ 3</option>
                  </Form.Select>
                </div>

                <div className='display-inline-flex'>
                  <label className='add-detail-lable'>ผู้มีสิธิ์เบิก</label>
                  <input type="text" className='mx-3 add-detail-input' placeholder=''/>
                </div>

                <div className='display-inline-flex'>
                  <label className='add-detail-lable'>วันที่เบิก</label>
                  <DateTimePicker onChange={onChange} value={value} format={"dd MMMM y"} disableClock={true} clearIcon className='date'/>
                  {/* <input type="text" className='mx-3 add-detail-input' placeholder=''/> */}
                </div>
              </div>

              <div className='display-flex'>
                <div className='display-inline-flex'>
                  <label className='add-detail-lable'>หน่วยงาน</label>
                  <textarea rows="3" className='mx-3 add-detail-textarea' placeholder=''/>
                </div>

                <div className='display-inline-flex'>
                  <label className='add-detail-lable'>จำนวนเงิน</label>
                  <input type="number" className='mx-3 input-money' placeholder=''/>
                  <label style={{display: "flex", alignItems: "center", paddingBottom: "26px"}}>บาท</label>
                </div>

                <div className='display-inline-flex'>
                  <label className='add-detail-lable'>เลือกปีงบประมาณ</label>
                  <Form.Select aria-label="Default select example" className='mx-3 add-detail-input'>
                    <option value="">เลือกปีงบประมาณ</option>
                    <option value="2563">2563</option>
                    <option value="2564">2564</option>
                    <option value="2565">2565</option>
                  </Form.Select>
                </div>
              </div>
            </div>

            <Row>
              <Col><p className='text-title px-3 pt-3'>รายงานบันทึกใบเบิกครุภัณฑ์</p></Col>
              <Col className='addTableRows' xs="6" md="5" lg="4" xl="3">
                <button className="btn-green" onClick={addTableRows}>+ เพิ่มใบเบิกครุภัณฑ์</button>
                {/* <button className="btn-green" onClick={addTableRowsMobile}>+ เพิ่มใบเบิกครุภัณฑ์</button> */}
              </Col>
            </Row>
              
            <hr className='m-0'/>

            <div className="box-add-detail">
              <Row>
                <Col xl="12" className=''>
                  <table className="table table-sm table-striped table-bordered table-hover" style={{textAlign: "center"}}>
                    <thead>
                      <tr>
                        <th>ลำดับ</th>
                        <th>เลขครุภัณฑ์</th>
                        <th>ชื่อครุภัณฑ์</th>
                        <th>ยี่ห้อ/รุ่น/ขนาด</th>
                        <th>Serial No.</th>
                        <th>ผู้ผลิต/ผู้จำหน่าย</th>
                        <th>จำนวน</th>
                        <th>จำนวนเงิน</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      <TableRows rowsData={rowsData} deleteTableRows={deleteTableRows} handleChange={handleChange} />
                    </tbody> 
                  </table>
                </Col>
              </Row>
            </div>

          </Col>
        </Row>


        <div className='bg-white redius-2 mt-2 p-3'>
          <Row>
            <Col xs="6" md="3" lg="2" xl="2">
              <p className='font-green'>ผู้บันทึก</p>
              <p className='mb-0'>xxxxx xxxxxxxxxx</p>
              <p className=''>12/04/2016 12.00</p>
            </Col>
            <Col xs="6" md="3" lg="2" xl="2">
              <p className='font-green'>ผู้แก้ไข</p>
              <p className='mb-0'>xxxxx xxxxxxxxxx</p>
              <p className=''>12/04/2016 12.00</p>
            </Col>
            <Col xs="6" md="3" lg="2" xl="2">
              <p className='font-green'>ผู้ส่งเรื่อง</p>
              <p className='mb-0'>xxxxx xxxxxxxxxx</p>
              <p className=''>12/04/2016 12.00</p>
            </Col>
            <Col xs="6" md="3" lg="2" xl="2">
              <p className='font-green'>ผู้อนุมัติ</p>
              <p className='mb-0'>xxxxx xxxxxxxxxx</p>
              <p className=''>12/04/2016 12.00</p>
            </Col>
          </Row>
        </div>

      </Col>
    </Col>
  )
}
export default Home