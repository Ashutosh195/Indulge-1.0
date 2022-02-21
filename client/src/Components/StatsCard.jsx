import React from 'react'
import { Card } from 'react-bootstrap'
import "../Styles/StatsCard.css"

export default function () {
    return (<>
        <div className="StatsCardcontainer ">
            <Card style={{ width: '15rem', height: '15rem' }}>
                <Card.Body className='statsCardbody p-5'>
                    <Card.Title className='statsCardTitle text-center'>275</Card.Title>
                    <hr style={{ color: 'black' }} />
                    <Card.Subtitle className="mb-2 text-muted text-center statsCardText">JNF Filled</Card.Subtitle>

                </Card.Body>
            </Card>
            <Card style={{ width: '15rem', height: '15rem' }}>
                <Card.Body className='statsCardbody p-5'>
                    <Card.Title className='statsCardTitle text-center'>129</Card.Title>
                    <hr style={{ color: 'black' }} />
                    <Card.Subtitle className="mb-2 text-muted text-center statsCardText">INF Filled</Card.Subtitle>

                </Card.Body>
            </Card>
            <Card style={{ width: '15rem', height: '15rem' }}>
                <Card.Body className='statsCardbody p-5'>
                    <Card.Title className='statsCardTitle text-center'>45 LPA</Card.Title>
                    <hr style={{ color: 'black' }} />
                    <Card.Subtitle className="mb-2 text-muted text-center statsCardText">Max ctc</Card.Subtitle>

                </Card.Body>
            </Card>
        </div>
    </>
    )
}
