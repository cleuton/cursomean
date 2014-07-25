# -*- mode: ruby -*-
# vi: set ft=ruby :

#
# Este exemplo é parte do Workshop de desenvolvimento com Stack MEAN, 
# de Cleuton Sampaio. 
#
# O trabalho Workshop de Desenvolvimento com Stack MEAN de Cleuton Sampaio de Melo Jr
# está licenciado com uma Licença Creative Commons - Atribuição-CompartilhaIgual 4.0 
# Internacional.
#
# http://creativecommons.org/licenses/
# 
# Isso inclui: Textos, páginas, gráficos e código-fonte.
# 

# Vagrantfile API/syntax version. Don't touch unless you know what you're doing!
VAGRANTFILE_API_VERSION = "2"

Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|
  config.vm.box = "ubuntu14"
  config.vm.box_url = "https://cloud-images.ubuntu.com/vagrant/trusty/current/trusty-server-cloudimg-i386-vagrant-disk1.box"

  # Atencao: se quiser acessas as apps Node/Express de sua máquina host
  # use as portas: 8090, se quiser acessar a porta 8080 na VM, 
  # e 3030, se quiser acessar a porta 3000 na vm.
  config.vm.network :forwarded_port, guest: 8080, host: 8090
  config.vm.network :forwarded_port, guest: 3000, host: 3030
  
  # Provisionamento da máquina
  config.vm.provision :shell, :inline => "sudo apt-get -y update"
  config.vm.provision :shell, :inline => "sudo apt-get -y install nodejs"
  config.vm.provision :shell, :inline => "sudo ln -s /usr/bin/nodejs /usr/bin/node"
  config.vm.provision :shell, :inline => "sudo apt-get -y install npm"
  config.vm.provision :shell, :inline => "sudo npm install -g express-generator"
  config.vm.provision :shell, :inline => "sudo ln -s /usr/local/lib/node_modules/express-generator/bin/express /usr/bin/express"
  config.vm.provision :shell, :inline => "sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 7F0CEB10"
  config.vm.provision :shell, :inline => "echo 'deb http://downloads-distro.mongodb.org/repo/debian-sysvinit dist 10gen' | sudo tee /etc/apt/sources.list.d/mongodb.list"
  config.vm.provision :shell, :inline => "sudo apt-get -y update"
  config.vm.provision :shell, :inline => "sudo apt-get -y install mongodb-org"
  config.vm.provision :shell, :inline => "sudo service mongod start"
  
end
