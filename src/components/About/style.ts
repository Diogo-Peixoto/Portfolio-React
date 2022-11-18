import styled from "styled-components";

export const AboutStyle = styled.section`
    & > div{
        grid-template-columns: repeat(2, 1fr);
        align-items: center;
        column-gap: 4rem;

        &>img{
            width: 350px;
            border-radius: 1.5rem;
            justify-self: center;
        }
    }

    .about__description{
        padding: 0 4rem 0 0;
        margin-bottom: var(--mb-2-5);
    }

    @media screen and (max-width: 992px){
        & > div{
            grid-template-columns: 1fr;

            &>img{
                width: 220px;
            }

            .about__data{
                text-align: center;

                &>div{
                    justify-content: center;
                }
            }
        }

        .about__box{
            padding: 0.75rem 0.5rem;
        }

        .about__description{
            padding: 0 5rem;
            margin-bottom: 2rem;
        }
    }

    @media screen and (max-width: 576px) {
        .about__data >div{
            grid-template-columns: repeat(3,1fr);
        }
        
        .about__description{
            padding: 0;
        }
    }

    @media screen and (max-width: 360px){
        .about__data >div{
            grid-template-columns: repeat(2,1fr);
        }
    }
`

export const InfoStyle = styled.div`

    grid-template-columns: repeat(3, 140px);
    gap: 0.5rem;
    margin-bottom: var(--mb-2);

    .about__box{
        background-color: var(--container-color);
        border: 1px solid rgba(0, 0, 0, 0.1);
        border-radius: 0.75rem;
        text-align: center;
        padding: 1rem 1.25rem;

        i{
            font-size: 1.5rem;
            color: var(--title-color);
            margin-bottom: var(--mb-0-5);
        }

        h3{
            font-size: var(--small-font-size);
            font-weight: var(--font-medium);
        }
        
        span{
            font-size: var(--tiny-font-size);
        }
    }

`