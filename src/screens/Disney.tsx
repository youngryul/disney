import styled from "styled-components";
import {useQuery} from "react-query";
import {fetchList} from "../api";
import {Link} from "react-router-dom";

const Container = styled.div`
  padding: 0px 20px;
  margin: 0 auto;
`;

const Header = styled.header`
  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 48px;
  color: ${(props) => props.theme.textColor};
`;

const Loader = styled.span`
    text-align: center;
`;

const List = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
`;

const Detail = styled.div`
  margin-bottom: 20px;
  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    border-radius: 10%;
    transition: color 0.2s ease-in;
  }
  &:hover {
    a {
      background-color: ${(props) => props.theme.textColor};
      color: ${(props) => props.theme.accentColor};
    }
  }
`;

const Img = styled.img`
    width: 200px;
    height: 200px;
    margin-right: 10px;
    border-radius: 50%;
    margin-bottom: 10px;
`;

interface IList {
    id: number,
    name: string,
    imageUrl: string,
}

function Disney() {
    const { isLoading, data } = useQuery<IList[]>("list", fetchList);
    return (
        <>
            <Container>
                <Header>
                    <Title>Disney Character</Title>
                </Header>
                {
                    isLoading ? <Loader>Loading...</Loader> :
                        <List>
                            {data?.slice(0,200).map((character) => (
                                <Detail key={character.id}>
                                    <Link to={`/character/${character.id}`}>
                                        <Img src={`${character.imageUrl}`}/>
                                        {character.name}
                                    </Link>
                                </Detail>
                                ))
                            }
                        </List>
                }
            </Container>
        </>
    );
}

export default Disney;