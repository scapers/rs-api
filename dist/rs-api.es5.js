/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = Object.setPrototypeOf ||
    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
    function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

/***
 * @model Schema for araxxor path
 */
var AraxxorPath = /** @class */ (function () {
    function AraxxorPath(location, number, characteristic) {
        this.location = location || '';
        this.number = number || 0;
        this.characteristic = characteristic || '';
    }
    return AraxxorPath;
}());

/***
 * @model Schema for araxxor rotation
 */
var AraxxorRotation = /** @class */ (function () {
    function AraxxorRotation(open, closed) {
        this.open = open || [];
        this.closed = closed || new AraxxorPath();
    }
    return AraxxorRotation;
}());

/***
 * @hidden
 */
var AraxxorPaths = /** @class */ (function () {
    function AraxxorPaths() {
        this.top = new AraxxorPath('top', 1, 'Minions');
        this.middle = new AraxxorPath('middle', 2, 'Acid');
        this.bottom = new AraxxorPath('bottom', 3, 'Darkness');
    }
    return AraxxorPaths;
}());

var BossRotation = /** @class */ (function () {
    function BossRotation(rotation, daysUntilNext, startDate) {
        this.rotation = rotation || null;
        this.daysUntilNext = daysUntilNext || 0;
        this.startDate = startDate || new Date();
    }
    return BossRotation;
}());

var Boss = /** @class */ (function () {
    function Boss() {
    }
    Boss.prototype.getRotations = function (forDate) {
        var _this = this;
        return new Promise(function (resolve) {
            forDate = forDate == null ? new Date() : forDate;
            resolve(_this.getRotationsForSpecific(forDate));
        });
    };
    Boss.prototype.getRotationsForSpecific = function (forDate) {
        return [new BossRotation(undefined, 0, new Date())];
    };
    return Boss;
}());

var Araxxor = /** @class */ (function (_super) {
    __extends(Araxxor, _super);
    function Araxxor() {
        var _this = _super.call(this) || this;
        _this.availablePaths = new AraxxorPaths();
        _this.paths = [
            _this.availablePaths.top,
            _this.availablePaths.middle,
            _this.availablePaths.bottom
        ];
        return _this;
    }
    Araxxor.prototype.getRotationsForSpecific = function (forDate) {
        var _this = this;
        var rotations = [];
        this.paths.forEach(function (path, i) {
            // find date to calculate for
            var daysToAdd = 4 * i;
            var now = new Date(forDate);
            now.setDate(now.getDate() + daysToAdd);
            // get rotation index
            var rotationIndex = Math.floor(((Math.floor(Math.floor(now / 1000) / (24 * 60 * 60)) + 3) % (4 * _this.paths.length)) / 4);
            var closed = _this.paths[rotationIndex];
            var open = _this.paths.filter(function (path) {
                return path != closed;
            });
            // find days until the next index would be reached to find last day of rotation
            var daysUntilNext = 4 -
                (((Math.floor(Date.now() / 1000 / (24 * 60 * 60)) + 3) % (4 * _this.paths.length)) % 4) +
                daysToAdd;
            // find when the current rotation started
            var start = new Date(forDate);
            start.setDate(start.getDate() + (daysUntilNext - 4));
            // build araxxor rotation
            var rotation = new AraxxorRotation(open, closed);
            rotations.push(new BossRotation(rotation, daysUntilNext, start));
        });
        _super.prototype.getRotationsForSpecific.call(this, forDate);
        return rotations;
    };
    return Araxxor;
}(Boss));

/***
 * @model Schema for a rise of the six rotation
 */
var RoTSRotation = /** @class */ (function () {
    function RoTSRotation(west, east) {
        this.west = west || null;
        this.east = east || null;
    }
    return RoTSRotation;
}());

/***
 * @hidden
 */
var RoTSBrother;
(function (RoTSBrother) {
    RoTSBrother["A"] = "Ahrim";
    RoTSBrother["D"] = "Dharok";
    RoTSBrother["G"] = "Guthan";
    RoTSBrother["K"] = "Karil";
    RoTSBrother["T"] = "Torag";
    RoTSBrother["V"] = "Verac";
    RoTSBrother["UNKNOWN"] = "";
})(RoTSBrother || (RoTSBrother = {}));

/***
 * @hidden
 */
var RoTSBrothersRotation = /** @class */ (function () {
    function RoTSBrothersRotation() {
        this.rotation = [
            new RoTSRotation([RoTSBrother.D, RoTSBrother.T, RoTSBrother.V], [RoTSBrother.A, RoTSBrother.G, RoTSBrother.K]),
            new RoTSRotation([RoTSBrother.G, RoTSBrother.K, RoTSBrother.T], [RoTSBrother.A, RoTSBrother.D, RoTSBrother.V]),
            new RoTSRotation([RoTSBrother.G, RoTSBrother.K, RoTSBrother.V], [RoTSBrother.A, RoTSBrother.D, RoTSBrother.T]),
            new RoTSRotation([RoTSBrother.G, RoTSBrother.T, RoTSBrother.V], [RoTSBrother.A, RoTSBrother.D, RoTSBrother.K]),
            new RoTSRotation([RoTSBrother.K, RoTSBrother.T, RoTSBrother.V], [RoTSBrother.A, RoTSBrother.D, RoTSBrother.G]),
            new RoTSRotation([RoTSBrother.A, RoTSBrother.D, RoTSBrother.G], [RoTSBrother.K, RoTSBrother.T, RoTSBrother.V]),
            new RoTSRotation([RoTSBrother.A, RoTSBrother.D, RoTSBrother.K], [RoTSBrother.G, RoTSBrother.T, RoTSBrother.V]),
            new RoTSRotation([RoTSBrother.A, RoTSBrother.D, RoTSBrother.T], [RoTSBrother.G, RoTSBrother.K, RoTSBrother.V]),
            new RoTSRotation([RoTSBrother.A, RoTSBrother.D, RoTSBrother.V], [RoTSBrother.G, RoTSBrother.K, RoTSBrother.T]),
            new RoTSRotation([RoTSBrother.A, RoTSBrother.G, RoTSBrother.K], [RoTSBrother.D, RoTSBrother.T, RoTSBrother.V]),
            new RoTSRotation([RoTSBrother.A, RoTSBrother.G, RoTSBrother.T], [RoTSBrother.D, RoTSBrother.K, RoTSBrother.V]),
            new RoTSRotation([RoTSBrother.A, RoTSBrother.G, RoTSBrother.V], [RoTSBrother.D, RoTSBrother.K, RoTSBrother.T]),
            new RoTSRotation([RoTSBrother.A, RoTSBrother.K, RoTSBrother.T], [RoTSBrother.D, RoTSBrother.G, RoTSBrother.V]),
            new RoTSRotation([RoTSBrother.A, RoTSBrother.K, RoTSBrother.V], [RoTSBrother.D, RoTSBrother.G, RoTSBrother.T]),
            new RoTSRotation([RoTSBrother.A, RoTSBrother.T, RoTSBrother.V], [RoTSBrother.D, RoTSBrother.G, RoTSBrother.K]),
            new RoTSRotation([RoTSBrother.D, RoTSBrother.G, RoTSBrother.K], [RoTSBrother.A, RoTSBrother.T, RoTSBrother.V]),
            new RoTSRotation([RoTSBrother.D, RoTSBrother.G, RoTSBrother.T], [RoTSBrother.A, RoTSBrother.K, RoTSBrother.V]),
            new RoTSRotation([RoTSBrother.D, RoTSBrother.G, RoTSBrother.V], [RoTSBrother.A, RoTSBrother.K, RoTSBrother.T]),
            new RoTSRotation([RoTSBrother.D, RoTSBrother.K, RoTSBrother.T], [RoTSBrother.A, RoTSBrother.G, RoTSBrother.V]),
            new RoTSRotation([RoTSBrother.D, RoTSBrother.K, RoTSBrother.V], [RoTSBrother.A, RoTSBrother.G, RoTSBrother.T])
        ];
    }
    return RoTSBrothersRotation;
}());

var RoTS = /** @class */ (function (_super) {
    __extends(RoTS, _super);
    function RoTS() {
        var _this = _super.call(this) || this;
        _this.rotsRotation = new RoTSBrothersRotation().rotation;
        return _this;
    }
    RoTS.prototype.getRotationsForSpecific = function (forDate) {
        var _this = this;
        var rotations = [];
        this.rotsRotation.forEach(function (r, i) {
            var now = new Date(forDate);
            now.setDate(now.getDate() + i);
            var rotationIndex = Math.floor(now / 1000 / (24 * 60 * 60)) % 20;
            var rotation = new RoTSRotation(_this.rotsRotation[rotationIndex].west, _this.rotsRotation[rotationIndex].east);
            rotations.push(new BossRotation(rotation, 1, now));
        });
        _super.prototype.getRotationsForSpecific.call(this, forDate);
        return rotations;
    };
    return RoTS;
}(Boss));

var Bosses = /** @class */ (function () {
    function Bosses() {
    }
    Bosses.prototype.araxxor = function () {
        return new Araxxor();
    };
    Bosses.prototype.rots = function () {
        return new RoTS();
    };
    return Bosses;
}());

// Import here Polyfills if needed. Recommended core-js (npm i -D core-js)
var RsApi = /** @class */ (function () {
    function RsApi() {
    }
    RsApi.prototype.bosses = function () {
        return new Bosses();
    };
    return RsApi;
}());

export default RsApi;
//# sourceMappingURL=rs-api.es5.js.map
