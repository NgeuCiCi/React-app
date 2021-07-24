import React, { useState } from 'react';

export default function ActivityTextComponent(props) {
    const [readMore, setReadMore] = useState(false);
    const text = props.text;

    if (text.length < 60) {
        return (
            <span>
                {text}
            </span>
        )
    } else {
        return (
            <span>
                {readMore ? text : text.slice(0, 60) + ' ...'}
                <span style={{ color: 'green', paddingLeft: 10 }} onClick={() => setReadMore(!readMore)}>{readMore ? 'Ẩn bớt' : 'Xem thêm'}</span>
            </span>
        )
    }

}