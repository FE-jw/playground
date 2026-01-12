class TestSDK {
  #secretVar = 'secret';

  constructor() {
    this.version = 'v1.0.0';
    this.created = false;
    this.isOpen = false;
  }

  create() {
    this.created = true;
    console.log('>>>> create');
  }

  open() {
    if (!this.created) return console.log('[ERROR] Please call create() first.');

    this.isOpen = true;
    console.log('>>>> open');
  }

  getVersion() {
    return this.version;
  }
}

export default TestSDK;
