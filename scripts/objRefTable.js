const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.iframe
	];
};
self.C3_JsPropNameTable = [
	{iframe: 0}
];

self.InstanceType = {
	iframe: class extends self.IIframeInstance {}
}