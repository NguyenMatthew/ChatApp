import { Avatar, IconButton, Button } from '@material-ui/core'
import styled from "styled-components";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchIcon from "@material-ui/icons/Search";
import * as EmailValidator from "email-validator";

function Sidebar() {
    const createChat = () => {
        const input = prompt("Please enter an email address for the user you wish to chat with");

        if (!input) return null;

        // validate email and check if user exists
        if (EmailValidator.validate(input)) {
            // add the chat into the DB "chats" collection if it doesn't already exist and is valid
            
        }
    };
    return (
    <Container>
        <Header>
            <UserAvatar />
            <IconsContainer>
                <IconButton>
                    <ChatIcon />
                </IconButton>
                <IconButton>
                    <MoreVertIcon />
                </IconButton>                    
            </IconsContainer>
        </Header>

        <Search>
            <SearchIcon />
            <SearchInput placeholder="Search in chats" />
        </Search>

        <SidebarButton onClick={createChat}>Start a new chat</SidebarButton>

        {/* List of Chats */}
    </Container>
    )
}

export default Sidebar

// Applies CSS style to components

const Container = styled.div``;

const SidebarButton = styled(Button)`
    width: 100%;
    &&& {
        border-top: 1px solid whitesmoke;
        border-bottom: 1px solid whitesmoke;
    }
`;

const Search = styled.div`
    display: flex;
    align-items: center;
    padding: 20px;
    border-radius: 2px;
`;

const SearchInput = styled.input`
    outline-width: 0;
    border: none;
    flex: 1;
`;

const Header = styled.div`
    display: flex;
    position: sticky;
    top: 0;
    background-color: white;
    z-index: 1;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    height: 80px;
    border-bottom: 1px solid whitesmoke;
`;

const UserAvatar = styled(Avatar)`
    cursor: pointer;
    :hover {
        opacity: 0.8;
    }
`;

const IconsContainer = styled.div`
    display: flex;
`;