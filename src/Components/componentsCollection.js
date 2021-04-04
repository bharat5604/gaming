import React, { Component } from 'react';
import { Tabs, Tab, Nav, Row, Col } from 'react-bootstrap'
import search_icon from './Assets/img/cards/search_icon.png'

// Banner
export class GameSection extends Component {
    render() {
        return (
            <div className="games__part">
                <div className="container">
                    <div className="row">
                        <Tab.Container id="left-tabs-example" defaultActiveKey={this.props.defaultTab}>
                            <Row>
                                {this.props.children}
                            </Row>
                        </Tab.Container>

                    </div>
                </div>
            </div>
        );
    }
}

export class GameSidebar extends Component {
    render() {
        return (
            <Col sm={2} className="p-0">
                <Nav variant="pills" className="flex-column">
                    {this.props.children}
                </Nav>
            </Col>
        )
    }
}

export class GameSideBarItem extends Component {
    render() {
        return (
            <Nav.Item>
                <Nav.Link eventKey={this.props.sideItem}>
                    <img src={this.props.ImgSrc} alt={this.props.sideItem} />
                    {this.props.name}
                </Nav.Link>
            </Nav.Item>
        )
    }
}


export class GameListSection extends Component {
    render() {
        return (
            <Col sm={10} className="pl-0">

                {this.props.children}
            </Col>
        )
    }
}

export class GameList extends Component {
    render() {
        return (
            <Tab.Content>
                <Tab.Pane eventKey={this.props.TabName}>
                    <div className="row ml-0 Game_gridview">
                        {this.props.children}
                    </div>
                </Tab.Pane>
            </Tab.Content>
        )
    }
}

export class GameIndividual extends Component {
    render() {
        return (
            <div className="col-sm-3 gameImg_div">
                <img src={this.props.GameImg} alt={this.props.Alt} width="100%" className=" gameImg" />
                <img src={this.props.GameImgHover} alt={this.props.Alt} width="100%" className="gameImg_Hover" />
            </div>
        )
    }
}



// Search bar
export class TopSearchBar extends Component {
    render() {
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
}



