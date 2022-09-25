import styled from 'styled-components';

// eslint-disable-next-line @typescript-eslint/naming-convention
type Props = {
    favorite: boolean;
};

export const BookInfoContainer = styled.section<Props>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    max-width: 1290px;
    width: 100%;

    margin: auto;
    padding-top: 60px;

    .book__info-wrapper {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-start;

        max-width: 1290px;
        width: 100%;

        .book__logo {
            position: relative;

            &__img {
            width: 522px;
            height: 779px;
            border-radius: 16px;

            }

            &__save {
                background-color: #344966;
                position: absolute;
                right: 20px;
                top: 20px;
                color: #f0f4ef;
                border: 0;
                padding: 24px;
                border-radius: 50%;
                opacity: ${(p) => (p.favorite ? 1 : 0.5)};
                cursor: pointer;

                &-favorite {
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translate(-50%,-50%);
                }

                :hover {
                opacity: 1;
                }
            }
        }

        .book__info {
            width: 50%;

            &__title {
                font-weight: 700;
                font-size: 40px;
                line-height: 60px;
                color: #0D1821;
            }

            &__author-name, &__description-title {
                font-weight: 500;
                font-size: 24px;
                line-height: 36px;
                color: #0D1821;
            }

            &__description {
                font-weight: 500;
                font-size: 16px;
                line-height: 24px;
                color: #344966;

                padding: 10px 0 74px;
            }

            &__buy-btns {
                display: flex;
                flex-direction: row;
                justify-content: flex-start;
                align-items: flex-start;

                &__btn {
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-start;
                    align-items: flex-start;

                    width: 50%;

                    &__title {
                        font-weight: 500;
                        font-size: 16px;
                        line-height: 24px;
                        color: #344966;
                    }
                }
            }
        }
    }

    .book__comments {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;

        padding: 110px 0 68px;
    }
`;