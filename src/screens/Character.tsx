import {useQuery} from "react-query";
import {fetchDetail} from "../api";
import {Link, useParams} from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  padding: 0px 20px;
  margin: 0 auto;
`;

const Header = styled.header`
  margin-top: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  a {
    margin-bottom: 10px;
    font-size: 50px;
  }
`;

const Title = styled.h1`
  font-size: 48px;
  color: ${(props) => props.theme.textColor};
`;

const Loader = styled.span`
    text-align: center;
`;

const Img = styled.img`
    width: 200px;
    height: 200px;
    margin-right: 10px;
    border-radius: 50%;
    margin-bottom: 10px;
`;
const Film = styled.div`
    background-color: ${(props) => props.theme.accentColor};
    margin-top: 20px;
    margin-bottom: 10px;
    font-size: larger;
`;

interface IDetail {
    id: number;
    films: Array<string>;
    name: string;
    imageUrl: string;
}

function Character() {
    const { id } = useParams();
    const { isLoading, data } = useQuery<IDetail>("detail", () => fetchDetail(id));
    return (
        <>
            <Container>
                <Header>
                    {
                        isLoading ? <Loader>Loading...</Loader> : (
                            <>
                                <Link to={"/"}>&larr;</Link>
                                <Img src={`${data?.imageUrl}`}/>
                                <Title>{data?.name}'s Films'</Title>
                                {data?.films.map((film) => (
                                    <Film key={film}>
                                        {film}
                                    </Film>
                                ))}
                            </>
                        )
                    }

                </Header>
            </Container>
        </>
    );
}

export default Character;