import React from 'react';

export interface ArticlesType{
    id: number;  
    title: string;
    upvotes: number;
    date: string;
}


export function Articles(articles: number) {

    return (
        <div className="card w-50 mx-auto">
            <table>
                <thead>
                <tr>
                    <th>Title</th>
                    <th>Upvotes</th>
                    <th>Date</th>
                </tr>
                </thead>
                <tbody>
                
                    <tr data-testid="article" key="article-index">
                    <td data-testid="article-title">Article 1 title</td>
                        <td data-testid="article-upvotes">Article 1 title</td>
                        {articles.upvotes}
                    <td data-testid="article-date">Article 1 title</td>

                        <td data-testid="most-upvoted-link" key="most-upvoted-link-index"> most-upvoted-link </td>
                        
                        <td data-testid="most-recent-link" key="most-recent-link-index"> most-recent-link </td>
                        
                    </tr>

                    
                    
                </tbody>
            </table>
        </div>
    );

}

export default Articles;
