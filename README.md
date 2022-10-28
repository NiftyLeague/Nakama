### The following instructions are tested on **Ubuntu 22.04 x64**
---

## Install Docker

```sh
sudo apt-get update
sudo apt install -y ca-certificates curl gnupg lsb-release
sudo mkdir -p /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
echo "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
sudo apt update -y

sudo apt-get install docker-ce docker-ce-cli containerd.io docker-compose-plugin

sudo service docker start
sudo docker --version
```

## Install NodeJS and NPM
```sh
sudo apt install nodejs
node -v
sudo apt install npm
npm --version
```

## Install NVM and set the node version to 16
```sh
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/master/install.sh | bash
source ~/.bashrc
nvm --version
nvm list-remote
nvm install v16
node -v
```

## Clone and initialize the Nifty League Nakama project

```sh
git clone git@github.com:NiftyLeague/Nakama.git
cd Nakama/

npm i
npm run type-check
npm run build
```

## Initialize and run the Docker image
```sh
sudo docker system prune -a
sudo docker compose up --build
```
