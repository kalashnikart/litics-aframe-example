const assets = {
  // target: 'https://cdn.glitch.global/78c65e45-83d9-4827-b861-b3709f7b2e7c/lush.glb?v=1649681515587',
  target: '/phone.gltf'
}

export const template = (camera: string) => {
  return `
  <a-scene vr-mode-ui='enabled: false' renderer='antialias: false'
    loading-screen='dotsColor: white; backgroundColor: black'>
    <a-sky color="#000"></a-sky>
    <a-assets>
      <a-asset-item 
        crossorigin='anonymous'
        response-type='arraybuffer'
        id='target_model'
        src='${assets.target}' />
    </a-assets>
    <a-entity id='heatmap'>
      <a-entity id='target' gltf-model='#target_model' position='0 0 0' transparent='true' scale='10 10 10'></a-entity>
    </a-entity>
    ${camera}
  </a-scene>`
};
