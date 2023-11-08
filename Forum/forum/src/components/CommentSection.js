import React, { useState, useEffect } from 'react';
import './CommentSection.css';
import UserAvatar from './UserAvatar'

// declarando o componente funcional CommentSection
const CommentSection = () => {
    //aqui se define os estados iniciais para armazenar os comentários, novos comentários e nome de usuário
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');
    const [username, setUsername] = useState('');

    // efeito que carrega os comentários salvos do armazenamento local (localStorage) ao carregar o componente
    useEffect(() => {
        loadCommentsFromLocalStorage();
    }, []);

    // efeito que salva os comentários no armazenamento local (localStorage) sempre que a variável de comentários for alterada
    useEffect(() => {
        saveCommentsToLocalStorage();
    }, [comments]);

    //essa função serve para carregar os comentários do armazenamento local (localStorage)
    const loadCommentsFromLocalStorage = () => {
        const storedComments = localStorage.getItem('comments'); // Obtém os comentários armazenados no localStorage
        if (storedComments) {
            setComments(JSON.parse(storedComments)); // Converte os comentários de string para um objeto e define o estado de comentários
        }
    };

    //essa função para salvar os comentários no armazenamento local (localStorage)
    const saveCommentsToLocalStorage = () => {
        localStorage.setItem('comments', JSON.stringify(comments)); // Converte os comentários de objeto para string e salva no localStorage
    };

    // Manipulador de evento para alterar o nome de usuário
    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    // Manipulador de evento para alterar o novo comentário
    const handleCommentChange = (e) => {
        setNewComment(e.target.value);
    };

    // manipula o evento para adicionar um novo comentário à lista de comentários
    const handleAddComment = (e) => {
        e.preventDefault();
        if (newComment.trim() !== '' && username.trim() !== '') {
            const commentObject = {
                username: username,
                comment: newComment,
            };
            setComments([...comments, commentObject]); // Adiciona o novo comentário à lista de comentários
            setNewComment(''); // Limpa o campo de novo comentário
            setUsername(''); // Limpa o campo de nome de usuário
        }
    };

    // este jsx renderiza o componente CommentSection com formulário de comentário e lista de comentários
    return (
        <div className="all">
            
            <div className="comment-section-container">
                <div className="container-title">
                    <h1 className="comment-section-title">-Fórum</h1>
                    <h1 className="comment-section-title2"> Heroiverso-</h1>
                </div>
                <form className="comment-form" onSubmit={handleAddComment}>
                    <input
                        type="text"
                        value={username}
                        onChange={handleUsernameChange}
                        placeholder="Seu nome"
                        className="input-username"
                    />
                    <br />
                    <textarea
                        value={newComment}
                        onChange={handleCommentChange}
                        placeholder="Digite seu comentário"
                        className="input-comment"
                    />
                    <br />
                    <button type="submit" className="comment-button">Adicionar Comentário</button>
                </form>
                <div className="comments-list">
                    {comments.length > 0 ? (
                        // map mapeia e exibe os comentários existentes
                        comments.map((comment, index) => (
                            <div key={index} className="comment-item">
                                <UserAvatar />
                                <strong className="comment-username">{comment.username}: </strong>
                                <span className="comment-text">{comment.comment}</span>
                            </div>
                        ))
                    ) : (
                        // Exibe uma mensagem se não houver comentários
                        <div className="no-comments">Sem comentários ainda. Seja o primeiro a comentar!</div>
                    )}
                </div>
            </div>
        </div>
    );
};
export default CommentSection;