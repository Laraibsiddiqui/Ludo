import React, { useState, useEffect } from 'react'
import './Index.css'



const LODO_SIZE = {
    height: 500,
    width: 500
}

const red_box = [
    {
        "color": "red",
        "id": "red_0",
        "isStop": false,
        "is_win": false,
        'number': 1,
    },
    {
        "color": "red",
        "id": "red_1",
        "isStop": true,
        "is_win": false,
        'number': 2,

    },
    {
        "color": "red",
        "id": "red_2",
        "isStop": false,
        "is_win": false,
        'number': 3,

    },
    {
        "color": "red",
        "id": "red_3",
        "isStop": false,
        "is_win": false,
        'number': 4,

    },
    {
        "color": "red",
        "id": "red_4",
        "isStop": false,
        "is_win": false,
        'number': 5,
    },
    {
        "color": "red",
        "id": "red_5",
        "isStop": false,
        "is_win": false,
        'number': 6,

    },
    {
        "color": "red",
        "id": "red_6",
        "isStop": false,
        "is_win": false,
        number: 52,
    },
    {
        "color": "red",
        "id": "red_7",
        "isStop": true,
        "is_win": true
    },
    {
        "color": "red",
        "id": "red_8",
        "isStop": true,
        "is_win": true
    },
    {
        "color": "red",
        "id": "red_9",
        "isStop": true,
        "is_win": true
    },
    {
        "color": "red",
        "id": "red_10",
        "isStop": true,
        "is_win": true
    },
    {
        "color": "red",
        "id": "red_11",
        "isStop": true,
        "is_win": true
    },
    {
        "color": "red",
        "id": "red_12",
        "isStop": false,
        "is_win": false,
        number: 51,
    },
    {
        "color": "red",
        "id": "red_13",
        "isStop": false,
        "is_win": false,
        number: 50,
    },
    {
        "color": "blue",
        "id": "red_14",
        "isStop": true,
        "is_win": false,
        number: 49,
    },
    {
        "color": "red",
        "id": "red_15",
        "isStop": false,
        "is_win": false,
        number: 48,
    },
    {
        "color": "red",
        "id": "red_16",
        "isStop": false,
        "is_win": false,
        number: 47,
    },
    {
        "color": "red",
        "id": "red_17",
        "isStop": false,
        "is_win": false,
        number: 46,
    }
]

const green_box = [
    {
        "color": "green",
        "id": "green_0",
        "isStop": false,
        "is_win": false,
        number: 12,
    },
    {
        "color": "green",
        "id": "green_1",
        "isStop": false,
        "is_win": false,
        number: 13,
    },
    {
        "color": "green",
        "id": "green_2",
        "isStop": false,
        "is_win": false,
        number: 14,
    },
    {
        "color": "green",
        "id": "green_3",
        "isStop": false,
        "is_win": false,
        number: 11,
    },
    {
        "color": "green",
        "id": "green_4",
        "isStop": true,
        "is_win": true
    },
    {
        "color": "green",
        "id": "green_5",
        "isStop": true,
        "is_win": false,
        number: 15,
    },
    {
        "color": "red",
        "id": "green_6",
        "isStop": true,
        "is_win": false,
        number: 10,
    },
    {
        "color": "green",
        "id": "green_7",
        "isStop": true,
        "is_win": true
    },
    {
        "color": "green",
        "id": "green_8",
        "isStop": false,
        "is_win": false,
        number: 16,
    },
    {
        "color": "green",
        "id": "green_9",
        "isStop": false,
        "is_win": false,
        number: 9
    },
    {
        "color": "green",
        "id": "green_10",
        "isStop": true,
        "is_win": true
    },
    {
        "color": "green",
        "id": "green_11",
        "isStop": false,
        "is_win": false,
        number: 17,
    },
    {
        "color": "green",
        "id": "green_12",
        "isStop": false,
        "is_win": false,
        number: 8,
    },
    {
        "color": "green",
        "id": "green_13",
        "isStop": true,
        "is_win": true
    },
    {
        "color": "green",
        "id": "green_14",
        "isStop": false,
        "is_win": false,
        number: 18
    },
    {
        "color": "green",
        "id": "green_15",
        "isStop": false,
        "is_win": false,
        number: 7,
    },
    {
        "color": "green",
        "id": "green_16",
        "isStop": true,
        "is_win": true
    },
    {
        "color": "green",
        "id": "green_17",
        "isStop": false,
        "is_win": false,
        number: 19
    }
]

const blue_box = [
    {
        "color": "blue",
        "id": "red_0",
        "isStop": false,
        "is_win": false,
        number: 45,
    },
    {
        "color": "blue",
        "id": "blue_1",
        "isStop": true,
        "is_win": true
    },
    {
        "color": "blue",
        "id": "blue_2",
        "isStop": false,
        "is_win": false,
        number: 33,
    },
    {
        "color": "blue",
        "id": "blue_3",
        "isStop": false,
        "is_win": false,
        number: 44,
    },
    {
        "color": "blue",
        "id": "blue_4",
        "isStop": true,
        "is_win": true
    },
    {
        "color": "blue",
        "id": "blue_5",
        "isStop": false,
        "is_win": false,
        number: 34,
    },
    {
        "color": "blue",
        "id": "blue_6",
        "isStop": false,
        "is_win": false,
        number: 43,
    },
    {
        "color": "blue",
        "id": "blue_7",
        "isStop": true,
        "is_win": true
    },
    {
        "color": "blue",
        "id": "blue_8",
        "isStop": false,
        "is_win": false,
        number: 35,
    },
    {
        "color": "blue",
        "id": "blue_9",
        "isStop": false,
        "is_win": false,
        number: 42,
    },
    {
        "color": "blue",
        "id": "blue_10",
        "isStop": true,
        "is_win": true
    },
    {
        "color": "yellow",
        "id": "blue_11",
        "isStop": true,
        "is_win": false,
        number: 36,
    },
    {
        "color": "blue",
        "id": "blue_12",
        "isStop": true,
        "is_win": false,
        number: 41,
    },
    {
        "color": "blue",
        "id": "blue_13",
        "isStop": true,
        "is_win": true
    },
    {
        "color": "blue",
        "id": "blue_14",
        "isStop": false,
        "is_win": false,
        number: 37,
    },
    {
        "color": "blue",
        "id": "blue_15",
        "isStop": false,
        "is_win": false,
        number: 40
    },
    {
        "color": "blue",
        "id": "blue_16",
        "isStop": false,
        "is_win": false,
        number: 39,
    },
    {
        "color": "blue",
        "id": "blue_17",
        "isStop": false,
        "is_win": false,
        number: 38,
    }
]

const yellow_box = [
    {
        "color": "yellow",
        "id": "yellow_0",
        "isStop": false,
        "is_win": false,
        number: 20,
    },
    {
        "color": "yellow",
        "id": "yellow_1",
        "isStop": false,
        "is_win": false,
        number: 21,
    },
    {
        "color": "yellow",
        "id": "yellow_2",
        "isStop": false,
        "is_win": false,
        number: 22,
    },
    {
        "color": "green",
        "id": "yellow_3",
        "isStop": true,
        "is_win": false,
        number: 23
    },
    {
        "color": "yellow",
        "id": "yellow_4",
        "isStop": false,
        "is_win": false,
        number: 24,
    },
    {
        "color": "yellow",
        "id": "yellow_5",
        "isStop": false,
        "is_win": false,
        number: 25,
    },
    {
        "color": "yellow",
        "id": "yellow_6",
        "isStop": true,
        "is_win": true,
    },
    {
        "color": "yellow",
        "id": "yellow_7",
        "isStop": true,
        "is_win": true
    },
    {
        "color": "yellow",
        "id": "yellow_8",
        "isStop": true,
        "is_win": true
    },
    {
        "color": "yellow",
        "id": "yellow_9",
        "isStop": true,
        "is_win": true
    },
    {
        "color": "yellow",
        "id": "yellow_10",
        "isStop": true,
        "is_win": true
    },
    {
        "color": "yellow",
        "id": "yellow_11",
        "isStop": false,
        "is_win": false,
        number: 26,
    },
    {
        "color": "yellow",
        "id": "yellow_12",
        "isStop": false,
        "is_win": false,
        number: 32,
    },
    {
        "color": "yellow",
        "id": "yellow_13",
        "isStop": false,
        "is_win": false,
        number: 31,
    },
    {
        "color": "blue",
        "id": "yellow_14",
        "isStop": false,
        "is_win": false,
        number: 30,
    },
    {
        "color": "yellow",
        "id": "yellow_15",
        "isStop": false,
        "is_win": false,
        number: 29,
    },
    {
        "color": "yellow",
        "id": "yellow_16",
        "isStop": true,
        "is_win": false,
        number: 28,
    },
    {
        "color": "yellow",
        "id": "yellow_17",
        "isStop": false,
        "is_win": false,
        number: 27,
    }
]

const goot_red = [
    {
        color: 'red',
        goot_num: 1
    },
    {
        color: 'red',
        goot_num: 2
    },
    {
        color: 'red',
        goot_num: 3
    },
    {
        color: 'red',
        goot_num: 4
    },
]

const goot_green = [
    {
        color: 'green',
        goot_num: 1
    },
    {
        color: 'green',
        goot_num: 2
    },
    {
        color: 'green',
        goot_num: 3
    },
    {
        color: 'green',
        goot_num: 4
    },
]

const goot_blue = [
    {
        color: 'blue',
        goot_num: 1
    },
    {
        color: 'blue',
        goot_num: 2
    },
    {
        color: 'blue',
        goot_num: 3
    },
    {
        color: 'blue',
        goot_num: 4
    },
]

const goot_yellow = [
    {
        color: 'yellow',
        goot_num: 1
    },
    {
        color: 'yellow',
        goot_num: 2
    },
    {
        color: 'yellow',
        goot_num: 3
    },
    {
        color: 'yellow',
        goot_num: 4
    },
]




const Ludo = () => {

    const { height, width } = LODO_SIZE
    const [redData, setRedData] = useState(red_box)
    const [greenData, setGreenData] = useState(green_box)
    const [blueData, setBlueData] = useState(blue_box)
    const [yellowData, setYellowData] = useState(yellow_box)

    const [redGoot, setRedGoot] = useState(goot_red)
    const [greenGoot, setGreenGoot] = useState(goot_green)
    const [blueGoot, setBlueGoot] = useState(goot_blue)
    const [yellowGoot, setYellowGoot] = useState(goot_yellow)


    return (


        <div className='Ludo'>

            <h1>Ludo</h1>

            <div style={{ height, width }} className='Ludo-Board'>

                <div style={{ height: height * .6, width: width * .4, background: 'red' }} className='Red'>


                    <div style={{ height: height * .4, width: '100%' }} className='red-home'>

                        <div className="goot_main">
                            {redGoot.map(goot => <div style={{ borderColor: goot.color }} className="all_goot"></div>)}
                        </div>

                    </div>



                    <div style={{ height: height * .2, width: '100%' }} className='red-goot-home'>

                        {redData.map(val => <div
                            title={val.number}
                            key={val.key}
                            id={val.id}
                            style={{
                                backgroundColor: val.isStop && val.color,
                                height: ((height * .2) / 3) - 2,
                                width: ((width * .4) / 6) - 2
                            }}
                            className="box"
                        >


                        </div>
                        )}
                    </div>


                </div>
                <div style={{ width: height * .6, height: width * .4, background: 'green', flexDirection: 'row' }} className='Green'>

                    <div style={{ width: height * .2, height: '100%' }} className="player2_box">
                        
                            {greenData.map(val => <div
                                title={val.number}
                                className="box"
                                key={val.key}
                                id={val.id}
                                style={{
                                    backgroundColor: val.isStop && val.color,
                                    height: ((height * .2) / 3) - 2,
                                    width: ((width * .4) / 6) - 2
                                }}
                            >
                            </div>
                            )}

                        
                    </div>
                    <div style={{ width: height * .4, height: '100%' }} className="player2_home">
                        <div className="goot_main">
                            {greenGoot.map(goot => <div style={{ borderColor: goot.color }} className="all_goot"></div>)}
                        </div>
                    </div>

                </div>
                <div style={{ width: height * .6, height: width * .4, background: 'blue', flexDirection: 'row' }} className='Blue'>

                    <div style={{ width: height * .4, height: '100%' }} className="player3_home">
                        <div className="goot_main">
                            {blueGoot.map(goot => <div style={{ borderColor: goot.color }} className="all_goot"></div>)}
                        </div>
                    </div>
                    <div style={{ width: height * .2, height: '100%' }} className="player3_box">
                        <div style={{ height: height * .2, width: '100%' }} className="player1_box">
                            {blueData.map(val => <div
                                title={val.number}
                                className="real_box"
                                key={val.key}
                                id={val.id}
                                style={{
                                    backgroundColor: val.isStop && val.color,
                                    height: ((height * .2) / 3) - 2,
                                    width: ((width * .4) / 6) - 2
                                }}
                            >
                            </div>
                            )}

                        </div>
                    </div>

                </div>
                <div style={{ height: height * .6, width: width * .4, background: 'yellow', position: 'absolute', bottom: 0, right: 0 }} className='Yellow'>

                    <div style={{ height: height * .2, width: '100%' }} className="player4_box">
                        <div style={{ height: height * .2, width: '100%' }} className="player1_box">
                            {yellowData.map(val => <div
                                title={val.number}
                                className="real_box"
                                key={val.key}
                                id={val.id}
                                style={{
                                    backgroundColor: val.isStop && val.color,
                                    height: ((height * .2) / 3) - 2,
                                    width: ((width * .4) / 6) - 2
                                }}
                            >
                            </div>
                            )}

                        </div>
                    </div>
                    <div style={{ height: height * .4, width: '100%' }} className="player4_home">
                        <div className="goot_main">
                            {yellowGoot.map(goot => <div style={{ borderColor: goot.color }} className="all_goot"></div>)}
                        </div>
                    </div>

                </div>

            </div>





        </div>
    )
}

export default Ludo     