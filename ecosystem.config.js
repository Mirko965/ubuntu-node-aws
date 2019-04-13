module.exports = {
  apps: [{
    name: 'ubuntu-node-aws',
    script: './index.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-3-19-88-98.us-east-2.compute.amazonaws.com',
      key: '~/.ssh/tijanaKey.pem',
      ref: 'origin/master',
      repo: 'https://github.com/Mirko965/ubuntu-node-aws.git',
      path: '/home/ubuntu/ubuntu-node-aws',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}
