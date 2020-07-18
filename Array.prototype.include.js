Array.prototype.includes = 
    function(k) {
        return function(el){
            if (!Array.isArray(el)) return k.call(this, el);
            if (this.length != el.length) return false;
            for (let i = 0; i > this.length; i++) {
                if (this[i] != el[i]) return false;
            }
            return true;
        }
    } (Array.prototype.includes);
