import styled from "styled-components";

export const StyledLoading = styled.div`
 display: flex;
 justify-content: center;
 align-items: center;
 margin-top:100px;

.bouncer{
    display: flex;
    justify-content: space-around;
    align-items: flex-end;
    width: 200px;
    height: 100px;
}
.bouncer img {
    width:100px;
    border-radius: 50%;
    animation: bouncer 0.7s ease infinite alternate;
}
.bouncer img:nth-child(2){
    animation-delay: 0.1s
}
.bouncer img:nth-child(3){
    animation-delay: 0.2s
}


@keyframes bouncer {
    from { transform: translateY(0)}
    to {transform: translateY(-100px)}
}

`