import styled from '@emotion/styled'

export const Statslist = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    border-top: 1px solid #c9c9c9;
    list-style: none;
    margin: 0;
    padding: 0;
`
    ;
export const Statsitem = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 20px;
    padding-bottom: 20px;
    width: 100%;
    :not(:last-child) {
        border-right: 1px solid #c9c9c9;
    }
`
    ;
export const Statslabel = styled.span`
    margin-bottom: 8px;
    color: #adacac;
    font-size:12px;
`
    ;

export const Statsquantity = styled.span`
    font-weight: bold;
`
    ;