import React from 'react'

export default function Curs({ccy, base_ccy, buy, sale}) {
    return (
        <div>
            <ul className='bank'>
                <li>{ccy}</li>
                <li>{buy}</li>
                <li>{base_ccy}</li>
                <li>{sale}</li>
            </ul>
        </div>
    )
}
