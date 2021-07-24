import React, { useState } from 'react'
import './Hoidap.css';
import logo from './Image/logo_ma11.png';
import vn from './Image/vn.jpg';
import tao from './Image/tao.jpg';
import order from './Image/order.png';
import REVENUE from './Image/notes.png';
import AVE from './Image/pen.png';
import PROD from './Image/bag.png';
import avt1 from './Image/avt1.png';
import avt2 from './Image/avt2.png';
import avt3 from './Image/avt3.png';
import avt4 from './Image/avt4.png';
import avt5 from './Image/avt5.png';

import { AiOutlineMenu } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { RiFullscreenLine } from "react-icons/ri";
import { BiBell } from "react-icons/bi";
import { AiOutlineSetting } from "react-icons/ai";
import { AiOutlineHome } from "react-icons/ai";
import { AiTwotoneCalendar } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";
import { HiChevronDown } from "react-icons/hi";
import { HiChevronUp } from "react-icons/hi";
import { BiPackage } from "react-icons/bi";
import { AiFillPieChart } from "react-icons/ai";
import { AiTwotoneSetting } from "react-icons/ai";
import { TiArrowUp } from "react-icons/ti";
import { TiArrowRight } from "react-icons/ti";
import { TiArrowDown } from "react-icons/ti";
import { BsArrowRight } from "react-icons/bs";

import Dropdown from 'react-bootstrap/Dropdown';
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import ActivityTextComponent from './ActivityTextComponent';
import Profile from './Profile';

import DoughnutChart from './DoughnutChart';
import LineChart from './LineChart';
import { PieChart } from 'react-minimal-pie-chart';
import { Line } from 'peity-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';


const abc = () => {
    return <div>abc</div>
}
function createData(id, name, date, amount, status, edit, avt) {
    return { id, name, date, amount, status, edit, avt };
}

const rows = [
    createData('#14256', 'Tao', '7/1/2018', '$94', 'Delivered', 'Edit', avt1),
    createData('#14254', 'Neymar', '5/3/2012', '$9', 'Pending', 'Edit', avt2),
    createData('#14255', 'Ronaldo', '11/4/2024', '$10', 'Delivered', 'Edit', avt3),
    createData('#14257', 'Cavani', '25/7/2438', '$31', 'Cancel', 'Edit', avt4),
    createData('#14258', 'Pogba', '1/1/20128', '$1', 'Delivered', 'Edit', avt5),
    createData('#14258', 'Pogba', '1/1/20128', '$1', 'Delivered', 'Edit', avt5),
];



function JAN(jan, text) {
    return { jan, text };
}
const rows1 = [
    JAN('JAN 22', 'Responded to need “Volunteer Activities”'),
    JAN('JAN 20', 'At vero eos et accusamus et iusto odio dignissimos ducimus qui deleniti atque Thanh Sang'),
    JAN('JAN 19', 'Joined the group “Boardsmanship Forum”'),
    JAN('JAN 17', 'Responded to need “In-Kind Opportunity”'),
    JAN('JAN 16', 'Sed ut perspiciatis unde omnis iste natus error sit rem.'),

]

// const varx = ['1', '2', '3', '4', '5', '6', '7', 'cn'];
// const vary = [2, 5, 6, 8, 1, 3, 10];
// const CHART = document.getElementById('linechart').getContext('2d');
// const line_chart = new Chart(CHART, {
//     type: 'line',
//     data: {
//         labels: varx,
//         datasets: [{
//             label: 'name_data',
//             data: vary
//         }]
//     }
// });

function toggleClass1() {
    $('.li_body_ma_1_1a_chil').toggleClass("li_body_ma_1_1a_chil_w");

}
$(document).ready(function () {
    $('.menu').click(function () {
        $('.Logo').toggleClass("Logohiden");
        $('.body_ma_1').toggleClass("body_ma_1_w ");
        $('.body_ma_1').toggleClass("body_ma_1show ");

        $('.body_ma_2').toggleClass("body_ma_2w");
        $('.p_li_menu').toggleClass("p_li_menu_w");
        $('.a_li_menu').toggleClass("a_li_menu_w");

    });
});
function Hoidap() {
    const [page, setPage] = useState('Dashboard');
    const [drop1, setdrop1] = useState(true);
    const [UI1, setUI1] = useState(true);
    const [Chart1, setChart1] = useState(true);
    const [Moretext, setMoretext] = useState(true);
    const [Hidden, setHidden] = useState(true);
    const [HiddenModal, setHiddenModal] = useState(false);
    console.log('hoidap');
    console.log(HiddenModal);



    return (
        <div onClick={() => {
            // if (Hidden === false) {
            //     setHidden(true)
            // }
        }} >
            {/* Header */}
            <div id="header_ma">
                <div className="header_ma_1">
                    <div className="Logo" >
                        <img src={logo} alt="Logo" style={{ height: 50, width: 70 }} />
                    </div>

                    <div className="menu"
                        onClick={() => { setHidden(!Hidden) }}
                    >
                        < AiOutlineMenu size={28} />
                    </div>
                    <div className="cre_drop" style={{}}>
                        <a >
                            <Dropdown >
                                <Dropdown.Toggle style={{ fontSize: 17, backgroundColor: '#e9ecef', borderColor: '#e9ecef', color: 'black' }}  >
                                    Create
                                    </Dropdown.Toggle>

                                <Dropdown.Menu style={{ backgroundColor: '#73a47' }}>


                                    <Dropdown.Item href="#">1</Dropdown.Item>
                                    <Dropdown.Item href="#">2</Dropdown.Item>
                                    <Dropdown.Item href="#">3</Dropdown.Item>
                                    <hr style={{ margin: 0 }} />
                                    <Dropdown.Item href="#">4</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </a>
                    </div>
                </div>
                <div className="header_ma_2">
                    <div className="List_menu">
                        <ul className="lv1">
                            <li>list 1
                                <ul className="lv2  ">
                                    <li> item 1</li>
                                </ul>
                            </li>
                            <li>list 2
                                <ul className="lv2  ">
                                    <li> item 1</li>
                                    <li> item 2
                                    <ul className="lv3  ">
                                            <li> sub item 1</li>
                                            <li> sub item 2</li>
                                            <li> sub item 3</li>

                                        </ul>
                                    </li>
                                    <li> item 3</li>

                                </ul>
                            </li>
                            <li>list 3
                                <ul className="lv2  ">
                                    <li> item 1</li>
                                    <li> item 2</li>
                                    <li> item 3</li>
                                    <li> item 4</li>
                                    <li> item 5</li>
                                </ul>
                            </li>

                        </ul>
                    </div>
                    <div className="input_text" >
                        <input type="text" placeholder="Search..." />
                        <span >  <BsSearch color="black" size={20} />
                        </span>
                    </div>
                    <div className="header_ma_2_1 mobile" >
                        <input type="text" placeholder="Search..." style={{ borderRadius: 30, paddingLeft: 14, height: 37, width: 210, backgroundColor: '#e0e0ea', borderColor: '#e0e0ea', borderStyle: 'none', textAlign: 'left', outlineStyle: 'none' }} />
                        <div style={{ display: 'flex', position: "absolute", right: 11 }}>  <BsSearch color="black" size={20} />
                        </div>
                    </div>
                    <div className="header_ma_2_1 mobile" >
                        <img src={vn} style={{ height: 18, width: 27, marginLeft: 15 }} />
                        <a style={{ marginRight: 15, marginLeft: 8 }}>Viet Nam</a>
                    </div>

                    <div className="header_ma_2_1 mobile">
                        <a style={{ marginRight: 15, marginLeft: 15 }} >
                            <RiFullscreenLine color="#525f80" size={25} />
                        </a>
                    </div>
                    <div className="header_ma_2_1">
                        <a style={{ marginRight: 15, marginLeft: 15 }} >
                            <BiBell color="#525f80" size={25} onClick={() => { setHiddenModal(false) }} />
                        </a>
                    </div>
                    <div className="header_ma_2_1" onClick={() => { setHiddenModal(true) }} >
                        <img src={tao} style={{ height: 40, width: 40, borderRadius: '50%', marginRight: 15, marginLeft: 15 }} />

                    </div>
                    <Profile show={HiddenModal} setShow={setHiddenModal} />
                    <div className="header_ma_2_1">
                        <a style={{ marginRight: 15, marginLeft: 15 }} >
                            <AiOutlineSetting color="#525f80" size={25} />
                        </a>
                    </div>
                </div>
            </div>
            {/* body */}
            <div id="body_ma">
                <div
                    className="body_ma_1"
                // className={Hidden === true ? 'body_ma_1' : 'body_ma_1show' }  
                >
                    <p className="a_li_menu"  >MAIN</p>

                    <li className="li_body_ma_1" onClick={() => {
                        setPage('Dashboard')
                    }} >
                        <div style={page === 'Dashboard' ? { height: 40, width: '100%', paddingLeft: 25, display: 'flex', alignItems: 'center', backgroundColor: 'rgba(255, 255, 255, 0.15)', color: '#f8f9fa' } : { height: 40, width: '100%', marginLeft: 25, display: 'flex', alignItems: 'center' }}  >
                            <AiOutlineHome size={20} className={page === 'Dashboard' ? 'hover_li_ma_1aa' : 'hover_li_ma_1a'} />
                            <p className="p_li_menu">Dashboard</p>
                        </div>
                    </li>
                    <li className="li_body_ma_1" onClick={() => {
                        setPage('Cal')
                    }} >
                        <div style={page === 'Cal' ? { height: 40, width: '100%', paddingLeft: 25, display: 'flex', alignItems: 'center', backgroundColor: 'rgba(255, 255, 255, 0.15)', color: '#f8f9fa' } : { height: 40, width: '100%', marginLeft: 25, display: 'flex', alignItems: 'center' }} >
                            <AiTwotoneCalendar size={20} className={page === 'Cal' ? 'hover_li_ma_1aa' : 'hover_li_ma_1a'} />
                            <p className="p_li_menu">Calendar</p>


                        </div>
                    </li>
                    {drop1 === true ?
                        <li className="li_body_ma_1" onClick={() => { setdrop1(false); toggleClass1(); setPage('mail') }} >
                            <div style={{ height: 40, width: '100%', paddingLeft: 25, display: 'flex', alignItems: 'center', position: 'relative' }}>
                                <HiOutlineMail className="hover_li_ma_1a" size={20} />

                                <p className="p_li_menu">  Email</p>

                                <HiChevronDown className="hover_li_ma_1b" size={20} />
                            </div>
                        </li>
                        :
                        <li className="li_body_ma_1_1"  >
                            <div onClick={() => { setdrop1(true) }}
                                style={page === 'mail' ? { height: 40, width: '100%', paddingLeft: 25, display: 'flex', alignItems: 'center', position: 'relative', backgroundColor: 'rgba(255, 255, 255, 0.15)', color: '#f8f9fa' }
                                    : { height: 40, width: '100%', paddingLeft: 25, display: 'flex', alignItems: 'center', position: 'relative' }}>
                                <HiOutlineMail color='rgb(180, 201, 222)' size={20} style={{ marginRight: 20 }} />
                                <p className="p_li_menu"  >  Email</p>
                                <HiChevronUp size={20} style={{ color: 'rgb(180, 201, 222)', position: 'absolute', right: 5, top: 11 }} />
                            </div>
                            <div>
                                <li className="li_body_ma_1_1a"  >
                                    <div className={Hidden === false ? "li_body_ma_1_1a_chil_w" : "li_body_ma_1_1a_chil"}>Inbox</div>
                                </li>
                                <li className="li_body_ma_1_1a">
                                    <div className={Hidden === false ? "li_body_ma_1_1a_chil_w" : "li_body_ma_1_1a_chil"}>Email Read </div>
                                </li>
                                <li className="li_body_ma_1_1a">
                                    <div className={Hidden === false ? "li_body_ma_1_1a_chil_w" : "li_body_ma_1_1a_chil"}>Email Compose </div>
                                </li>
                            </div>

                        </li>
                    }


                    <p className="a_li_menu"  >

                        COMPONENTS</p>
                    {UI1 === true ?
                        <li className="li_body_ma_1" onClick={() => { setUI1(false) }} >

                            <div style={{ height: 40, width: '100%', paddingLeft: 25, display: 'flex', alignItems: 'center', position: 'relative' }} >
                                <BiPackage size={20} className="hover_li_ma_1a" />
                                <p className="p_li_menu">  UI Elements</p>


                                <HiChevronDown size={20} className="hover_li_ma_1b" />

                            </div>

                        </li>
                        :
                        <li className="li_body_ma_1_1" >

                            <div onClick={() => { setUI1(true) }} style={{ height: 40, width: '100%', paddingLeft: 25, display: 'flex', alignItems: 'center', position: 'relative' }} >
                                <BiPackage size={20} style={{ marginRight: 20 }} />
                                <p className="p_li_menu">  UI Elements</p>

                                <HiChevronUp size={20} style={{ color: 'rgb(180, 201, 222)', position: 'absolute', right: 5, top: 11 }} />

                            </div>
                            <div>
                                <li className="li_body_ma_1_1a">
                                    <div className={Hidden === false ? "li_body_ma_1_1a_chil_w" : "li_body_ma_1_1a_chil"}>Alerts</div>
                                </li>
                                <li className="li_body_ma_1_1a">
                                    <div className={Hidden === false ? "li_body_ma_1_1a_chil_w" : "li_body_ma_1_1a_chil"}>Buttons </div>
                                </li>
                                <li className="li_body_ma_1_1a">
                                    <div className={Hidden === false ? "li_body_ma_1_1a_chil_w" : "li_body_ma_1_1a_chil"}>Cards </div>
                                </li>
                                <li className="li_body_ma_1_1a">
                                    <div className={Hidden === false ? "li_body_ma_1_1a_chil_w" : "li_body_ma_1_1a_chil"}>Carousel</div>
                                </li>
                                <li className="li_body_ma_1_1a">
                                    <div className={Hidden === false ? "li_body_ma_1_1a_chil_w" : "li_body_ma_1_1a_chil"}>Dropdowns</div>
                                </li>
                                <li className="li_body_ma_1_1a">
                                    <div className={Hidden === false ? "li_body_ma_1_1a_chil_w" : "li_body_ma_1_1a_chil"}>Grid </div>
                                </li>
                            </div>

                        </li>
                    }
                    {Chart1 === true ?
                        <li className="li_body_ma_1" onClick={() => { setChart1(false) }} >

                            <div style={{ height: 40, width: '100%', paddingLeft: 25, display: 'flex', alignItems: 'center', position: 'relative' }} >
                                <AiFillPieChart size={20} className="hover_li_ma_1a" />
                                <p className="p_li_menu">Charts</p>

                                <HiChevronDown size={20} className="hover_li_ma_1b" />

                            </div>

                        </li>
                        :
                        <li className="li_body_ma_1_1" >

                            <div onClick={() => { setChart1(true) }} style={{ height: 40, width: '100%', paddingLeft: 25, display: 'flex', alignItems: 'center', position: 'relative' }} >
                                <AiFillPieChart color='rgb(180, 201, 222)' size={20} style={{ marginRight: 20 }} />
                                <p className="p_li_menu">Charts</p>

                                <HiChevronUp size={20} style={{ color: 'rgb(180, 201, 222)', position: 'absolute', right: 5, top: 11 }} />

                            </div>
                            <div>
                                <li className="li_body_ma_1_1a">
                                    <div className={Hidden === false ? "li_body_ma_1_1a_chil_w" : "li_body_ma_1_1a_chil"}  >Alerts</div>
                                </li>
                                <li className="li_body_ma_1_1a">
                                    <div className={Hidden === false ? "li_body_ma_1_1a_chil_w" : "li_body_ma_1_1a_chil"}>Buttons </div>
                                </li>
                                <li className="li_body_ma_1_1a">
                                    <div className={Hidden === false ? "li_body_ma_1_1a_chil_w" : "li_body_ma_1_1a_chil"}>Cards </div>
                                </li>
                                <li className="li_body_ma_1_1a">
                                    <div className={Hidden === false ? "li_body_ma_1_1a_chil_w" : "li_body_ma_1_1a_chil"}>Alerts</div>
                                </li>
                                <li className="li_body_ma_1_1a">
                                    <div className={Hidden === false ? "li_body_ma_1_1a_chil_w" : "li_body_ma_1_1a_chil"}>Buttons </div>
                                </li>
                                <li className="li_body_ma_1_1a">
                                    <div className={Hidden === false ? "li_body_ma_1_1a_chil_w" : "li_body_ma_1_1a_chil"}>Cards </div>
                                </li>
                                <li className="li_body_ma_1_1a">
                                    <div className={Hidden === false ? "li_body_ma_1_1a_chil_w" : "li_body_ma_1_1a_chil"}>Alerts</div>
                                </li>
                                <li className="li_body_ma_1_1a">
                                    <div className={Hidden === false ? "li_body_ma_1_1a_chil_w" : "li_body_ma_1_1a_chil"}>Buttons </div>
                                </li>
                                <li className="li_body_ma_1_1a">
                                    <div className={Hidden === false ? "li_body_ma_1_1a_chil_w" : "li_body_ma_1_1a_chil"}>Cards </div>
                                </li>
                                <li className="li_body_ma_1_1a">
                                    <div className={Hidden === false ? "li_body_ma_1_1a_chil_w" : "li_body_ma_1_1a_chil"}>Alerts</div>
                                </li>
                                <li className="li_body_ma_1_1a">
                                    <div className={Hidden === false ? "li_body_ma_1_1a_chil_w" : "li_body_ma_1_1a_chil"}>Buttons </div>
                                </li>
                                <li className="li_body_ma_1_1a">
                                    <div className={Hidden === false ? "li_body_ma_1_1a_chil_w" : "li_body_ma_1_1a_chil"}>Cards </div>
                                </li>
                            </div>

                        </li>
                    }
                </div>
                {page === 'Dashboard' ?
                    <div className="body_ma_2">
                        <div className="body_ma_2_1" >
                            <div className="body_ma_2_1a">
                                <b style={{ fontSize: 18 }} > Dashboard</b>
                                <span style={{ fontSize: 14 }} > Welcome to Veltrix Dashboard</span>
                            </div>
                            <div className="body_ma_2_1b">
                                <button style={{ height: 35, width: 100, borderColor: '#626ed4', backgroundColor: '#626ed4', borderStyle: 'solid', borderRadius: 4, color: 'white' }}>
                                    <AiTwotoneSetting size={18} style={{ color: 'white', marginRight: 7, marginBottom: 3 }} />
                                    Settings
                                </button>
                            </div>
                        </div>
                        <div className="body_ma_2_2">
                            <div className="body_ma_2_2a" >
                                <div className="body_ma_2_2a1" >
                                    <div className="ma_2_2a1-1" style={{ backgroundColor: '#02a499' }} > + 12% </div>
                                    <div className="ma_2_2a1-2" >
                                        <div className="ma_2_2a1-2a" >
                                            <img src={order} />
                                        </div>
                                        <b className="ma_2_2a1-2a_name" >ORDERS</b>
                                        <span className="ma_2_2a1-2a_num" >1,68 <TiArrowUp size={38} style={{ color: '#02a499' }} />  </span>
                                        <span className="ma_2_2a1-2a_since" >Since last month <TiArrowRight size={30} />  </span>
                                    </div>
                                </div>
                            </div>
                            <div className="body_ma_2_2a" >
                                <div className="body_ma_2_2a1" >
                                    <div className="ma_2_2a1-1" style={{ backgroundColor: '#ec4561' }} > - 28% </div>
                                    <div className="ma_2_2a1-2" >
                                        <div className="ma_2_2a1-2a" >
                                            <img src={REVENUE} />
                                        </div>
                                        <b className="ma_2_2a1-2a_name" >REVENUE</b>
                                        <span className="ma_2_2a1-2a_num" >52,3  <TiArrowDown size={38} style={{ color: 'red' }} />  </span>
                                        <span className="ma_2_2a1-2a_since" >Since last month <TiArrowRight size={30} />  </span>

                                    </div>
                                </div>
                            </div>
                            <div className="body_ma_2_2a" >
                                <div className="body_ma_2_2a1" >
                                    <div className="ma_2_2a1-1" style={{ backgroundColor: '#38a4f8' }} >0% </div>
                                    <div className="ma_2_2a1-2" >
                                        <div className="ma_2_2a1-2a" >
                                            <img src={AVE} />
                                        </div>
                                        <b className="ma_2_2a1-2a_name" >AVERAGE PRICE</b>
                                        <span className="ma_2_2a1-2a_num" >15.8 <TiArrowUp size={38} style={{ color: '#02a499' }} />  </span>
                                        <span className="ma_2_2a1-2a_since" >Since last month <TiArrowRight size={30} />  </span>

                                    </div>
                                </div>
                            </div>
                            <div className="body_ma_2_2a" >
                                <div className="body_ma_2_2a1" >
                                    <div className="ma_2_2a1-1" style={{ backgroundColor: '#f8b425' }} > + 84%  </div>
                                    <div className="ma_2_2a1-2" >
                                        <div className="ma_2_2a1-2a" >
                                            <img src={PROD} />
                                        </div>
                                        <b className="ma_2_2a1-2a_name" >PRODUCT SOLD</b>
                                        <span className="ma_2_2a1-2a_num" >243 <TiArrowUp size={38} style={{ color: '#02a499' }} />  </span>
                                        <span className="ma_2_2a1-2a_since" >Since last month <TiArrowRight size={30} />  </span>

                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="div_line_pie">


                            <div className="div_line_pie1">

                                <div className="line_chart">

                                    <LineChart className="line_chart_sty" />

                                </div>
                                <div className="Pie_Chart">
                                    <div className="Pie_Chart_a">
                                        <p style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: 25 }}> This month</p>
                                        <b style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: 25, marginBottom: 10 }}> $34,252</b>
                                        <p>It will be as simple as in fact it will be occidental.</p>
                                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: 20 }}>
                                            <PieChart style={{ height: 100, width: 100 }}
                                                data={[
                                                    { title: 'One', value: 8, color: '#02a499', },
                                                    { title: 'Two', value: 2, color: '#b2c0d6' },
                                                ]}
                                                lineWidth={30}
                                                startAngle={-90}
                                                viewBoxSize={20, 20}
                                                radius={40}
                                            />
                                        </div>
                                    </div>
                                    <div className="Pie_Chart_a">
                                        <p style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: 25 }}> Last month</p>
                                        <b style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: 25, marginBottom: 10 }}>$36,253</b>
                                        <p>It will be as simple as in fact it will be occidental.</p>
                                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: 20 }}>
                                            <PieChart style={{ height: 100, width: 100 }}
                                                data={[
                                                    { title: 'One', value: 6, color: '#02a499', },
                                                    { title: 'Two', value: 4, color: '#b2c0d6' },
                                                ]}
                                                lineWidth={30}
                                                startAngle={-90}
                                                viewBoxSize={20, 20}
                                                radius={40}
                                            />
                                        </div>

                                    </div>
                                </div>

                            </div>
                            <div className="div_line_pie2">
                                <h4 style={{ fontSize: 16, paddingLeft: 20, marginBottom: 20, }}>Sales Analytics</h4>
                                <div style={{ display: 'flex', paddingLeft: 20 }}>
                                    <div style={{ flex: 1, paddingLeft: 4 }}>
                                        <p>Online</p>
                                        <b>1,542</b>
                                    </div>
                                    <div style={{ flex: 1 }}>
                                        <Line style={{ height: 50, width: 150 }}
                                            values={[5, 3, 9, 6, 5, 9, 7, 3, 5, 2, 10, 3, 5]}
                                            height="60" width="110" />
                                    </div>
                                </div>
                                <hr style={{ margin: 20 }} />
                                <div style={{ display: 'flex', paddingLeft: 20 }}>
                                    <div style={{ flex: 1, paddingLeft: 4 }}>
                                        <p>Offline</p>
                                        <b>6,451</b>
                                    </div>
                                    <div style={{ flex: 1 }}>
                                        <Line style={{ height: 50, width: 150 }}
                                            values={[5, 3, 9, -6, 5, 9, 7, 3, -5, 2, 10, 3, 5]}
                                            height="60" width="110" />
                                    </div>
                                </div>
                                <hr style={{ margin: 20 }} />
                                <div style={{ display: 'flex', paddingLeft: 20 }}>
                                    <div style={{ flex: 1, paddingLeft: 4 }}>
                                        <p>Marketing</p>
                                        <b>84,574</b>
                                    </div>
                                    <div style={{ flex: 1 }}>
                                        <Line style={{ height: 50, width: 150 }}
                                            values={[5, 3, 9, 6, 5, 9, 7, 3, 5, 2, 10, 3, 5]}
                                            height="60" width="110" />
                                    </div>
                                </div>

                            </div>

                        </div>
                        <div className="activity_table">
                            <div className="SalesReport_table_1">
                                <DoughnutChart />
                                {/* <canvas id="linechart" ></canvas> */}
                                {/* <div className="btn_test">
                                    <div >
                                        <button className="btn_test1">Hover me</button>
                                    </div>
                                    <div >
                                        <button className="btn_test2">
                                            <span>Hover me</span>
                                        </button>
                                    </div>
                                </div>
                                <div className="Test_border">

                                </div> */}
                            </div>
                            <div className="activity_table_2">
                                <div className="activity_table_2_padin">
                                    <h4 style={{ textJustify: "inherit", fontSize: 16, marginBottom: 24 }}>Activity</h4>
                                    <ol className="activity_feed">
                                        {rows1.map((row) => (
                                            <li className="feed_item">
                                                <div className="feed_item_list">
                                                    <span className="list_date">
                                                        {row.jan}
                                                    </span>
                                                    <span className="list_text">
                                                        <ActivityTextComponent text={row.text} />
                                                        {/* {row.text.length > 20 ?
                                                            <ReadMoreReact style={{ color: 'red' }} text={row.text}
                                                                min={10}
                                                                ideal={40}
                                                                max={row.text.lenght}
                                                                readMoreText="Xem thêm"
                                                            />
                                                            :
                                                            row.text
                                                        } */}

                                                    </span>
                                                </div>
                                            </li>
                                        ))}
                                    </ol>
                                    <div className="div_btn_load">
                                        <button className="btn_load" > Load More </button>
                                    </div>
                                </div>
                            </div>
                            <div className="activity_table_3">
                                {/* <div className="boxArticle">
                                    {Moretext === true ?
                                        <div className="area_article ">
                                            <p style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>Đột phá trong thiết kế thời thượng
                                        <img src={'https://i.pinimg.com/736x/81/12/29/8112296c722cbf2168857d8756743567.jpg'}
                                                    style={{ height: 450, width: '80%' }} />
                                            </p>
                                            <p className="text_1">Đột phá trong thiết kế thời thượng
                                        <img className="clip_img" src={'https://i.pinimg.com/736x/81/12/29/8112296c722cbf2168857d8756743567.jpg'}
                                                />
                                            </p>

                                            <div className="show-more" onClick={() => { setMoretext(false) }} >
                                                <p className="readmore">
                                                    Đọc thêm
                                        </p>
                                            </div>
                                        </div>
                                        :
                                        <div className="area_article ">
                                            <p style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>Đột phá trong thiết kế thời thượng
                                        <img src={'https://i.pinimg.com/736x/81/12/29/8112296c722cbf2168857d8756743567.jpg'}
                                                    style={{ height: 450, width: '80%' }} />
                                            </p>
                                            <p style={{ display: 'flex', flexDirection: 'column', margin: 0, alignItems: 'center', height: 235 }}>Đột phá trong thiết kế thời thượng
                                        <img src={'https://i.pinimg.com/736x/81/12/29/8112296c722cbf2168857d8756743567.jpg'}
                                                    style={{ height: 450, width: '80%', clear: 'both' }} />
                                            </p>
                                            <div>
                                                <p className="text_more">Đột phá trong thiết kế thời thượng
                                                Đột phá trong thiết kế thời thượng
                                                Đột phá trong thiết kế thời thượng
                                                </p>
                                            </div>
                                            <div>
                                                <p style={{ display: 'flex', flexDirection: 'column', margin: 0, alignItems: 'center' }}>Đột phá trong thiết kế thời thượng
                                                Đột phá trong thiết kế thời thượng
                                                Đột phá trong thiết kế thời thượng
                                                </p>
                                            </div>
                                        </div>

                                    }
                                </div> */}
                                <div className="activity_table_3a">
                                    <div style={{ marginRight: 10 }} className="activity_table_3aChil">
                                        <div className="centerText" >
                                            <IoIosCheckmarkCircleOutline color={'green'} size={55} />
                                        </div>
                                        <h5 className="centerText" style={{ marginTop: 10, textAlign: 'center', marginBottom: 25 }}> Order Successful</h5>
                                        <p style={{ textAlign: 'center' }} >Thanks you so much for your order.</p>
                                        <div className="centerText" style={{ marginBottom: 30, marginTop: 20 }}>
                                            <button className="btn_load " style={{ fontSize: 13 }} >  Check Status </button>
                                        </div>
                                    </div>
                                    <div style={{ marginLeft: 10, borderRadius: 4 }} className="activity_table_3aChila">
                                        <center> <b > Top Product Sale </b></center>
                                        <center style={{ fontSize: 40, marginTop: 30, marginBottom: 15, color: 'white' }}> <b > 1452 </b></center>
                                        <center> <p style={{ color: 'white' }}> Computer </p></center>
                                        <ActivityTextComponent style={{ marginBottom: 20 }} text={'At solmen va esser necessi far uniform myth Thanh Sang Bùi (Ngêu CiCi)'} />

                                    </div>

                                </div>
                                <div className="ClientRiview">
                                    <h4 style={{ textJustify: "inherit", fontSize: 16, marginBottom: 24, paddingLeft: 10 }}>Client Reviews</h4>
                                    <p>
                                        "Everyone realizes why a new common language would be desirable one could refuse to pay expensive translators it would be necessary."
                                    </p>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginRight: 20, marginLeft: 20 }}>
                                        <img src={avt2} style={{ height: 45 }} />
                                        <BsArrowRight style={{ fontSize: 22, color: 'blue' }} />
                                    </div>
                                </div>

                            </div>

                        </div>
                        <div className="table_chat" >
                            <div className="table_chat_a" >

                                <TableContainer component={Paper}>
                                    <Table aria-label="simple table">
                                        <TableHead>
                                            <TableRow>
                                                <TableCell align="left" colSpan={6}>Latest Trasaction</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableHead>
                                            <TableRow>
                                                <TableCell>
                                                    (#) Id
                                            </TableCell>
                                                <TableCell align="left">Name</TableCell>
                                                <TableCell align="left">Date</TableCell>
                                                <TableCell align="left">Amount</TableCell>
                                                <TableCell align="left">Status</TableCell>
                                                <TableCell align="left" > </TableCell>

                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {rows.map((row) => (
                                                <TableRow key={row.id}>
                                                    <TableCell component="th" scope="row">
                                                        {row.id}
                                                    </TableCell>
                                                    <TableCell align="left"> <img src={row.avt} style={{ marginRight: 10 }} />{row.name}</TableCell>
                                                    <TableCell align="left">{row.date}</TableCell>
                                                    <TableCell align="left">{row.amount}</TableCell>
                                                    <TableCell align="left">

                                                        {row.status === 'Delivered' ?
                                                            <span style={{ backgroundColor: '#02a499', borderRadius: 3, paddingLeft: 5, paddingRight: 5, paddingTop: 2, paddingBottom: 2, color: 'white', fontSize: 11 }}>{row.status}</span>
                                                            :
                                                            row.status === 'Pending' ?
                                                                <span style={{ backgroundColor: '#f8b425', borderRadius: 3, paddingLeft: 5, paddingRight: 5, paddingTop: 2, paddingBottom: 2, color: 'white', fontSize: 11 }}>{row.status}</span>
                                                                :
                                                                <span style={{ backgroundColor: '#ec4561', borderRadius: 3, paddingLeft: 5, paddingRight: 5, paddingTop: 2, paddingBottom: 2, color: 'white', fontSize: 11 }}>{row.status}</span>

                                                        }

                                                    </TableCell>
                                                    <TableCell>
                                                        <div style={{ height: 30, width: 40, backgroundColor: '#626ed4', borderColor: '#626ed4', borderRadius: 3, color: 'white', justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
                                                            {row.edit}
                                                        </div>
                                                    </TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </div>
                            <div className="table_chat_b">
                                <div className="chat_b1">
                                    <div className="chat_b1_1">
                                        <span>Chat</span>
                                        <div className="chat_b1_1a" >
                                            <div className="chat_b1_1a_1">
                                                <div className="chat_b1_1a_1_1" >
                                                    <div className="avt_time">
                                                        <img src={avt1} />
                                                        <span style={{ fontSize: 12 }}>10:00</span>
                                                    </div>

                                                    <div className="div_chat">
                                                        <div className="chat_b1_1a_1_1b" > </div>
                                                        <div className="chat_b1_1a_1_1c" >
                                                            <b style={{ fontSize: 15, color: '#626ed4' }}>Tao</b>
                                                            <span style={{ fontSize: 14, paddingLeft: 3 }}>Alo</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="chat_b1_1a_1_1_rep" >
                                                    <div className="avt_time">
                                                        <img src={avt2} />
                                                        <span style={{ fontSize: 12 }}>10:01</span>
                                                    </div>

                                                    <div className="div_chat">
                                                        <div className="chat_b1_1a_1_1c_rep" >
                                                            <b style={{ fontSize: 15, color: '#626ed4' }}>Mày</b>
                                                            <span style={{ fontSize: 14, paddingLeft: 3 }}>Nghe</span>
                                                        </div>
                                                        <div className="chat_b1_1a_1_1b_rep" > </div>

                                                    </div>
                                                </div>

                                                <div className="chat_b1_1a_1_1" >
                                                    <div className="avt_time">
                                                        <img src={avt1} />
                                                        <span style={{ fontSize: 12 }}>10:02</span>
                                                    </div>

                                                    <div className="div_chat">
                                                        <div className="chat_b1_1a_1_1b" > </div>
                                                        <div className="chat_b1_1a_1_1c" >
                                                            <b style={{ fontSize: 15, color: '#626ed4' }}>Tao</b>
                                                            <span style={{ fontSize: 14, paddingLeft: 3 }}>Cafe</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="chat_b1_1a_1_1_rep" >
                                                    <div className="avt_time">
                                                        <img src={avt2} />
                                                        <span style={{ fontSize: 12 }}>10:03</span>
                                                    </div>

                                                    <div className="div_chat">
                                                        <div className="chat_b1_1a_1_1c_rep" >
                                                            <b style={{ fontSize: 15, color: '#626ed4' }}>Mày</b>
                                                            <span style={{ fontSize: 14, paddingLeft: 3 }}>Đâu?</span>
                                                        </div>
                                                        <div className="chat_b1_1a_1_1b_rep" > </div>

                                                    </div>
                                                </div>

                                                <div className="chat_b1_1a_1_1" >
                                                    <div className="avt_time">
                                                        <img src={avt1} />
                                                        <span style={{ fontSize: 12 }}>10:04</span>
                                                    </div>

                                                    <div className="div_chat">
                                                        <div className="chat_b1_1a_1_1b" > </div>
                                                        <div className="chat_b1_1a_1_1c" >
                                                            <b style={{ fontSize: 15, color: '#626ed4' }}>Tao</b>
                                                            <span style={{ fontSize: 14, paddingLeft: 3 }}>Cũ</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="chat_b1_1a_1_1_rep" >
                                                    <div className="avt_time">
                                                        <img src={avt2} />
                                                        <span style={{ fontSize: 12 }}>10:05</span>
                                                    </div>

                                                    <div className="div_chat">
                                                        <div className="chat_b1_1a_1_1c_rep" >
                                                            <b style={{ fontSize: 15, color: '#626ed4' }}>Mày</b>
                                                            <span style={{ fontSize: 14, paddingLeft: 3 }}>OK!</span>
                                                        </div>
                                                        <div className="chat_b1_1a_1_1b_rep" > </div>

                                                    </div>
                                                </div>


                                                <div className="chat_b1_1a_1_1" >
                                                    <div className="avt_time">
                                                        <img src={avt1} />
                                                        <span style={{ fontSize: 12 }}>10:06</span>
                                                    </div>

                                                    <div className="div_chat">
                                                        <div className="chat_b1_1a_1_1b" > </div>
                                                        <div className="chat_b1_1a_1_1c" >
                                                            <b style={{ fontSize: 15, color: '#626ed4' }}>Tao</b>
                                                            <span style={{ fontSize: 14, paddingLeft: 3 }}>OK!</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="chat_b1_1a_1_1" >
                                                    <div className="avt_time">
                                                        <img src={avt1} />
                                                        <span style={{ fontSize: 12 }}>10:06</span>
                                                    </div>

                                                    <div className="div_chat">
                                                        <div className="chat_b1_1a_1_1b" > </div>
                                                        <div className="chat_b1_1a_1_1c" >
                                                            <b style={{ fontSize: 15, color: '#626ed4' }}>Tao</b>
                                                            <span style={{ fontSize: 14, paddingLeft: 3 }}>OK!</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="chat_b1_1a_2">
                                                <div className="div_input_chat">
                                                    <input placeholder="Enter your text  " className="input_chat" >
                                                    </input>
                                                </div>
                                                <div className="div_send_chat" >
                                                    <button style={{ height: 35, width: 70, borderColor: '#027e76', backgroundColor: '#027e76', color: 'white', borderStyle: 'solid', borderRadius: 3, textDecoration: 'none', boxSizing: 'border-box' }} > Send</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="centerText" style={{ backgroundColor: '#f2f2f5', height: 50 }}>Copyright © by Bui Thanh Sang</div>
                        </div>
                    </div>

                    : page === 'Cal' ?

                        <div className="body_ma_2">Cal</div> :

                        <div className="body_ma_2">Nulll</div>}

            </div>
        </div >

    );
}



export default Hoidap;
