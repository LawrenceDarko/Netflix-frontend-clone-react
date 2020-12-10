import React from 'react'
import styled from 'styled-components'

function TabContentTwo() {
    return (
        <TabContentContainer>
            <div className="tab-content">
                <div className="tab-top-content">
                <span className="one"> Watch TV shows and movies anytime, anywhere - personalized for you.</span>
                <Button className="try-btn two">try it now</Button>
                </div>
            </div>
        </TabContentContainer>
    )
}
export default TabContentTwo;

//Main content Container
const TabContentContainer = styled.div`
    background: var(--main-deep-dark);
    .tab-content{
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        font-size: 2rem;
        padding: 2.5rem;
        margin: 0 9%;
    }
    .one{
        flex: 3;
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