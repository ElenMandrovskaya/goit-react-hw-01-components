import styled from '@emotion/styled'

export const Statistics = styled.section`
    background-color: #fff;
    box-shadow: 0px 0px 8px 0px rgba(34, 60, 80, 0.2);
    width: 500px;
`
    ;
export const UploadStatsTitle = styled.h2`
color: #858585;
font-size: 25px;
padding-top: 30px;

`
    ;
export const UploadStatsList = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    border-top: 1px solid #858585;
    color: #fff;
    list-style: none;
    margin: 0;
    padding: 0;
`
    ;
export const UploadStatsItem = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 20px;
    padding-bottom: 20px;
    width: 100%;
    color: #fff;
    :not(:last-child) {
        border-right: 1px solid #858585;
    }
`
    ;
export const UploadStatsLabel = styled.span`
font-weight: 500;
`
    ;
export const UploadStatsPercentage = styled.span`
font-size: 25px;
font-weight: 700;
`
    ;