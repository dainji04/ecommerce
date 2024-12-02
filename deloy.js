const ghpages = require('gh-pages');

ghpages.publish(
    'dist',
    {
        branch: 'gh-pages',
        repo: 'https://github.com/dainji04/ecommerce.git',
    },
    (err) => {
        if (err) {
            console.error('Deployment failed:', err);
        } else {
            console.log('Deployment successful!');
        }
    }
);
