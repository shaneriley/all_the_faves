var AllTheFaves = {
  sizes: [144, 114, 72, 57],
  selector: "[rel=base_icon]",
  default_rel: "apple-touch-icon-precomposed",
  icon: function(size) {
    var link = document.createElement("link");
    link.setAttribute("rel", size.rel);
    link.setAttribute("sizes", size.side);
    link.setAttribute("href", this.canvas.toDataURL());
    return link;
  },
  __bind: function(func, ctx) {
    return function() { func.call(ctx); };
  },
  getOpt: function(key) {
    return this.opts[key] || this[key];
  },
  getSize: function(size) {
    var new_size = size;
    if (typeof size === "number") {
      new_size = {
        side: size,
        rel: this.getOpt("default_rel")
      };
    }
    return new_size;
  },
  createElements: function() {
    var d = document;
    this.canvas = d.createElement("canvas"),
    this.ctx = this.canvas.getContext("2d"),
    this.base_icon = d.createElement("img");
    this.base_icon.src = d.querySelector(this.getOpt("selector")).href;

    this.base_icon.onload = this.__bind(this.renderSizes, this);
  },
  renderSizes: function() {
    var self = this,
        sizes = self.getOpt("sizes");
    sizes.forEach(function(size) {
      self.renderSize(self.getSize(size));
    });
    this.teardown();
  },
  renderSize: function(size) {
    var side = this.base_icon.width;
    this.canvas.width = this.canvas.height = size.side;
    this.ctx.drawImage(this.base_icon, 0, 0, side, side, 0, 0, size.side, size.side);
    this.renderLink(size);
  },
  renderLink: function(size) {
    var link = this.icon(size);
    document.head.appendChild(link);
  },
  teardown: function() {
    this.opts = undefined;
  },
  render: function(opts) {
    this.opts = opts || {};
    this.createElements();
  }
};
