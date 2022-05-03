import React, { useState, useEffect } from 'react'
import { StyledPostCard, StyledPostCardHeader, StyledPostCardBody, StyledPostCardFooter } from './style'
import { VscAccount, VscTrash, VscStarEmpty, VscStarFull, VscComment, VscBookmark } from 'react-icons/vsc'

const PostCard = ({ post }) => {
    return (
        <StyledPostCard>
            <StyledPostCardHeader>
                <div className="user-display">
                    <VscAccount size={30} cursor='pointer' />
                    <p>jfdhsjofd</p>
                </div>
                <div>
                    <VscTrash size={30} cursor='pointer' />
                </div>
            </StyledPostCardHeader>
            <StyledPostCardBody>
                <h4>{post.content}</h4><br />
                <div className="img-container">
                    {post.image ? <img src={post.image} alt="" width="600" height="400" className='post-img' /> : ''}
                </div>
            </StyledPostCardBody><br />
            <StyledPostCardFooter>
                <div className="user-options">
                    <div className="star-comment">
                        <span style={{ display: 'flex', alignItems: 'center'}}>
                            <VscStarEmpty size={30} cursor='pointer' /> <div>2</div>
                        </span>
                        <span style={{ display: 'flex', alignItems: 'center'}}>
                            <VscComment size={30} cursor='pointer' />{' '}<div>5</div>
                        </span>
                    </div>
                    <VscBookmark size={30} cursor='pointer' />
                </div>
            </StyledPostCardFooter>
        </StyledPostCard>
    )
}

export default PostCard