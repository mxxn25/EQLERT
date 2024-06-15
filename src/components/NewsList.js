// NewsList.js
import { Box, Card, CardActionArea, Typography } from '@mui/material';
import React from 'react';
import { getNews } from '../apis';

const NewsList = () => {
    const navigate = (url) => {
        window.open(url, '_blank');
    };

    const [articles, setArticles] = React.useState([]);

    const getTimeAgo = (publishedAt) => {
        const currentTime = new Date();
        const newsTime = new Date(publishedAt);
        const timeDiff = Math.abs(currentTime - newsTime);
        const minutes = Math.floor(timeDiff / (1000 * 60));
        if (minutes < 60) {
            return `${minutes}m ago`;
        } else if (minutes < 1440) {
            const hours = Math.floor(minutes / 60);
            return `${hours}h ago`;
        } else {
            const days = Math.floor(minutes / 1440);
            return `${days}d ago`;
        }
    };

    React.useEffect(() => {
        const getNewsAsync = async () => {
            try {
                const data = await getNews();
                if (data.status === 'ok') {
                    setArticles(data.articles);
                }
            } catch (error) {
                console.error(error);
            }
        };
        getNewsAsync();
    }, []);

    return (
        <Box sx={{ pt: 2, pb: 2 }}>
            {articles.map(article => (
                <Card key={article.publishedAt} elevation={3} sx={{ my: 2, p: 2 }}>
                    <CardActionArea onClick={() => navigate(article.url)}>
                        <Typography variant="h6" textAlign='left' sx={{ color: '#990000' }} gutterBottom>
                            {article.title}
                        </Typography>
                        <Typography variant="subtitle2" textAlign='left' gutterBottom>
                            {getTimeAgo(article.publishedAt)} | {article.source.name}
                        </Typography>
                    </CardActionArea>
                </Card>
            ))}
        </Box>
    );
};

export default NewsList;
