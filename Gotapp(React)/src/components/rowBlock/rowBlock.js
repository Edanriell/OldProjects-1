import React from 'react';
import {Col, Row, Button, ButtonGroup} from 'reactstrap';

const RowBlock = ({left, right, itemListBtn, detailsBtn}) => {
    return (
        <Row>
            <Col md='6'>
            <ButtonGroup style={{margin:'0 0 20px 20px'}}>
                <Button 
                color="primary" 
                size="md"
                onClick={itemListBtn}
                >Item List</Button>
                <Button 
                color="primary" 
                size="md"
                onClick={detailsBtn}
                >Details</Button>
            </ButtonGroup>
                {left}
            </Col>
            <Col md='6'
            style={{marginTop: '58px'}}>
                {right}
            </Col>
        </Row>
    )
}

export default RowBlock;