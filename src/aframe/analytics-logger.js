const LOGGER_API = 'https://metalitix-dev.aircards.io/api/v1/xr-analytics';
// const LOGGER_API = 'https://metalitix-staging.aircards.io/api/v1/xr-analytics';

const AnalyticsLogger = {
  schema: {
    interval: { default: 500 },
    appkey: { default: 'test-appkey-1234-qwertyuiop' }
  },

  init() {
    console.log('metalitix-logger running');
    this.poll = this.poll.bind(this);
    this.startPolling = this.startPolling.bind(this);
    this.stopPolling = this.stopPolling.bind(this);

    this.nextPoll = undefined;
    this.worldPosition = new THREE.Vector3();
    this.worldDirection = new THREE.Vector3();
    this.uuid = THREE.MathUtils.generateUUID();

    window.aircards__analytics_logger__permission_granted = this.startPolling;
    window.aircards__analytics_logger__permission_denied = this.stopPolling;
  },

  play() {
    this.startPolling();
  },

  remove() {
    this.stopPolling();
  },

  startPolling() {
    const { interval } = this.data;
    this.nextPoll = setTimeout(this.poll, interval);
  },

  stopPolling() {
    clearTimeout(this.nextPoll);
  },

  poll() {
    const {
      el: { object3D },
      data: { interval, appkey },
      worldPosition, 
      worldDirection,
      uuid
    } = this;

    const pos = object3D.getWorldPosition(worldPosition);
    const dir = object3D.children[0].getWorldDirection(worldDirection);

    const payload = {
      appkey,
      sessionId: uuid,
      timestamp: Date.now(),
      position: {
        x: pos.x,
        y: pos.y,
        z: pos.z,
      },
      direction: {
        x: dir.x,
        y: dir.y,
        z: dir.z,
      },
    };

    console.log('poll', payload);

    fetch(LOGGER_API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload)
    });

    this.nextPoll = setTimeout(this.poll, interval);
  },
};

export default AnalyticsLogger;
