 // ** AMD pattern
    require(['patterns'], function (Patterns) {
   
        // ** namespace pattern 
        // ** revealing module pattern
        // ** singleton pattern
        Patterns.namespace("InAction").App = (function () {

            // ** namespace pattern (Models, Collections, Views, Routers)
            var Models = {};
            var Views = {};
            var Routers = {};

            var start = function (content) {
                var router = new Routers.Router({ el: content });
                var templates = ["Slide1", "Slide2", "Slide3", "Slide4", "Slide5", "Slide6", "Slide7"];
                loadTemplates(templates, function () {
                    Backbone.history.start();
                });
            };

            // run this locally (with file:// protocol) 
            //var loadTemplates = function (views, callback) {

            //    // ** iterator pattern
            //    $.each(views, function (index, view) {
            //        if (Views[view]) {
            //            Views[view].prototype.template = _.template($("#" + view).html());
            //        } else {
            //            alert(view + " not found.");
            //        }
            //    });

            //    callback();
            //};

            // run this on a web server (with http:// protocol)
            var loadTemplates = function (views, callback) {
                var deferreds = [];

                 //** iterator pattern
                $.each(views, function (index, view) {
                    if (Views[view]) {
                        deferreds.push($.get('../texttemplates/' + view.toLowerCase() + '.htm', function (data) {
                            Views[view].prototype.template = _.template(data);
                        }));
                    } else {
                        alert(view + " not found.");
                    }
                });

                // ** apply invocation Pattern
                $.when.apply(null, deferreds).done(callback);
            }

            var selectMenu = function (item) {
                $('.nav li').removeClass('active');

                // ** truthy/falsy idiom
                if (item) {
                    $('.' + item).addClass('active');
                }
            };

            // ** extend pattern
            Routers.Router = Backbone.Router.extend({
                // ** init pattern
                initialize: function (options) {
                    this.el = options.el;
                },
                routes: {
                    "": "first",
                    "slide1": "display",
                    "slide2": "display",
                    "slide3": "display",
                    "slide4": "display",
                    "slide5": "display",
                    "slide6": "display",
                    "slide7": "display"
                },

                // ** Factory method
                factory: function(type) {
                    switch(type) {
                        case "slide1": return new Views.Slide1();
                        case "slide2": return new Views.Slide2();
                        case "slide3": return new Views.Slide3();
                        case "slide4": return new Views.Slide4();
                        case "slide5": return new Views.Slide5();
                        case "slide6": return new Views.Slide6();
                        case "slide7": return new Views.Slide7();
                        default: return null;
                    }
                },

                first: function () {
                    var key = "slide1";
                    var view = this.factory(key);

                    selectMenu(key);
                    this.el.html(view.render().el);
                },

                display: function () {
                    var key = Backbone.history.fragment;
                    var view = this.factory(key);

                    selectMenu(key);
                    this.transition(view);
                },

                transition: function (view) {
                     this.el.animate({ width: '-=668' }, 300, function () {
                        this.el.html(view.render().el);
                        this.el.animate({ width: '+=668' }, 300);
                    }.bind(this));
                }
            });

            // ** extend pattern
            Views.Slide1 = Backbone.View.extend({
                render: function () {
                    this.$el.html(this.template());
                    return this;
                }
            });

            // ** extend pattern
            Views.Slide2 = Backbone.View.extend({
                render: function () {
                    this.$el.html(this.template());
                    return this;
                }
            });

            // ** extend pattern
            Views.Slide3 = Backbone.View.extend({
                render: function () {
                    this.$el.html(this.template());
                    return this;
                }
            });

            // ** extend pattern
            Views.Slide4 = Backbone.View.extend({
                render: function () {
                    this.$el.html(this.template());
                    return this;
                }
            });

            // ** extend pattern
            Views.Slide5 = Backbone.View.extend({
                render: function () {
                    this.$el.html(this.template());
                    return this;
                }
            });

            // ** extend pattern
            Views.Slide6 = Backbone.View.extend({
                render: function () {
                    this.$el.html(this.template());
                    return this;
                }
            });

            // ** extend pattern
            Views.Slide7 = Backbone.View.extend({
                render: function () {
                    this.$el.html(this.template());

                    // ** zero timout pattern
                    setTimeout(function () {
                        $("#name").focus();

                        // ** chaining pattern
                        $("#submit").off().on('click', function (e) {
                            alert("Great! Thank you for your message.");
                            return reset(e);
                        });

                        // ** chaining pattern
                        $("#reset").off().on('click', function (e) {
                            return reset(e);
                        });
                        var reset = function (e) {
                            e.preventDefault();
                            $("#name").val("").focus();
                            $("#email").val("");
                            $("#message").val("");
                            return false;
                        }
                    },0);

                    return this;
                }
            });

            return {
                start: start
            };

        })();

        $(function () {

            // Display timestap at top of page (this shows that only a single page is rendered).
            $("#time").html(new Date().toLocaleTimeString());

            // ** facade pattern
            Patterns.InAction.App.start($("#content-slide"));
        });


    });