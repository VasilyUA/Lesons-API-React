import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';

export default function Item({ data }) {
    return (
        <MDBCol style={{ marginTop: '3%' }} >
            <MDBCard style={{ width: "22rem" }}>
                {data.thumbnail && <img style={{ height: '100%' }} src={data.thumbnail} alt="" />}
                <MDBCardBody>
                    <MDBCardTitle>{data.title}</MDBCardTitle>
                    <MDBCardText>Nuber of comments: {data.num_comments}</MDBCardText>
                    <MDBBtn href={`https://www.reddit.com/${data.permalink}`} target="_blank" rel="noopener noreferrer" >Link</MDBBtn>
                </MDBCardBody>
            </MDBCard>
        </MDBCol>
    )
}
