async function main () {
  // We get the contract to deploy
  const ExampleToken = await ethers.getContractFactory('ExampleToken');
  console.log('Deploying ExampleToken...');
  const extoken = await ExampleToken.deploy();
  await extoken.deployed();
  console.log('ExampleToken deployed to:', extoken.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });