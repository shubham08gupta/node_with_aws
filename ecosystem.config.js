module.exports = {
  apps: [{
    name: 'node_with_aws',
    script: './index.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-35-154-184-64.ap-south-1.compute.amazonaws.com',
      key: '~/.ssh/tutorial.pem',
      ref: 'origin/master',
      repo: 'git@github.com:shubham171294/node_with_aws.git',
      path: '/home/ubuntu/node_with_aws',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}