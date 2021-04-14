import React from 'react';
import { Tabs, Tab, Nav, Row, Col } from 'react-bootstrap'
import search_icon from './Assets/img/cards/search_icon.png'

// Banner
export const GameSection = (props) => {
    return (
        <div className="games__part">
            <div className="container">
                <div className="row">
                    <Tab.Container id="left-tabs-example" defaultActiveKey={props.defaultTab}>
                        <Row>
                            {props.children}
                        </Row>
                    </Tab.Container>

                </div>
            </div>
        </div>
    );
}

export const GameSidebar = (props) => {
    return (
        <Col sm={2} className="p-0">
            <Nav variant="pills" className="flex-column">
                {props.children}
            </Nav>
        </Col>
    )
}

export const GameSideBarItem = (props) => {
    return (
        <Nav.Item>
            <Nav.Link eventKey={props.sideItem}>
                <img src={props.ImgSrc} alt={props.sideItem} />
                {props.name}
            </Nav.Link>
        </Nav.Item>
    )
}


export const GameListSection = (props) => {
    return (
        <Col sm={10} className="pl-0">

            {props.children}
        </Col>
    )
}

export const GameList = (props) => {
    return (
        <Tab.Content>
            <Tab.Pane eventKey={props.TabName}>
                <div className="row ml-0 Game_gridview">
                    {props.children}
                </div>
            </Tab.Pane>
        </Tab.Content>
    )
}

export const GameIndividual = (props) => {
    return (
        <div className="col-sm-3 gameImg_div">
            <img src={props.GameImg} alt={props.Alt} width="100%" className=" gameImg" />
            <img src={props.GameImgHover} alt={props.Alt} width="100%" className="gameImg_Hover" />
        </div>
    )
}



// Search bar
export const TopSearchBar = (props) => {
    return (
        <div className="row searchbar_div">
            <div className="col-sm-4 search_section3">
                <input type="text" className="form-control search_your_game" placeholder="Search your game" />
            </div>
            <div className="col-sm-3 search_section3">
                <select className="form-control search_dropdown">
                    <option>blackjack</option>
                    <option>Test 1</option>
                    <option>Test 2</option>
                    <option>Test 3</option>
                    <option>Test 4</option>
                </select>
            </div>
            <div className="col-sm-5 pr-0 search_div search_section3">
                <img src={search_icon} className="search_icon" alt="search" />
                <button className="btn search_btn">Search</button>
            </div>
        </div>
    )
}



