import React from 'react'
import Img from '../images/tab-1-pic.png'
import styled from 'styled-components'

function TabContentOne() {
    return (
        <TabContentContainer>
            <div className="container">
                <div className="tab-content">
                    <span className="one">If you decide Netflix isn't for you - no problem. No commitment. Cancel online anytime.<br/><button className="try-btn">try it now</button></span>
                    
                    <img className="two" src={Img}/>
                    <br/>
                </div>
            </div>
        </TabContentContainer>
    );
}
export default TabContentOne;

//Main content Container
const TabContentContainer = styled.div`
    background: var(--main-deep-dark);
    img{
        width: 31.875rem;
    }
    .tab-content{
        display: flex;
        justify-content: center;
        flex-direction: row;
        align-items: center;
        font-size: 2rem;
        padding: 2.5rem;
        margin: 0 9%;
    }
    .one{
        flex: 1;
    }
    .two{
        flex: 1;
    }
    .try-btn{
        width: 15rem
        display: inline-block; 
        background: var(--main-red);
        text-transform: uppercase;
        border: none;
        outline: none;
        margine: 0 33%;
        margin-top: 18px;
        padding: 10px;
        color: #fff;
        border-radius: 0.1875rem;
        font-size: 1rem;
        text-align: center;
        box-shadow: 0 1px 0 rgba(0,0,0,0.45);
        transition: background 0.2s ease-in;
        cursor: pointer;
        &:hover{
            background: var(--main-red-hover);
        }
}
    }
`;
 