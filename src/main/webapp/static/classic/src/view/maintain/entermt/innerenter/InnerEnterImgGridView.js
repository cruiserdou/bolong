/**
 * This view is an example list of people.
 */
Ext.define('app.view.maintain.entermt.innerenter.InnerEnterImgGridView', {
    extend: 'Ext.grid.Panel',
    xtype: 'innerenterimggridview',
    columnLines: true,
    requires: [
        'app.store.corpall.CorpImg',
        'Ext.grid.filters.Filters'
    ],
    store: {
        type: 'corpimg'
    },
    selModel: {
        type: 'spreadsheet',
        // Disables sorting by header click, though it will be still available via menu
        columnSelect: true,
        checkboxSelect: true,
        pruneRemoved: false,
        extensible: 'y'
    },

    columns: [
        {text: "文件名", flex: 1, dataIndex: 'img_name'},
        {text: "文件名", flex: 1, dataIndex: 'id', hidden: true},
        {text: "类别", flex: 1, dataIndex: 'img_type', hidden: true},
        {
            text: '删除', width: 100, dataIndex: 'id',
            renderer: function (val) {
                //return "<span style='color: #FF4444;' onclick='delete_corp_img(" + val + ")' >删除</span>";
                var return_del = "<INPUT type='button' value='删除'  onclick='delete_corp_img(" + val + ")'>";
                return return_del
            }
        },
        {
            text: '预览', width: 100, dataIndex: 'img_name',
            renderer: function (v, m, record) {
                priview_file = "/bolong/static/upload/annex/" + record.get('img_name');
                var return_view = "<INPUT type='button' value='预览'  onclick='view_img(\""+priview_file+"\")'>";
                return return_view

            }
        }
        //{
        //    text: '下载', width: 100, dataIndex: 'img_name',
        //    renderer: function (v, m, record) {
        //
        //        var s_file = "/bolong/static/upload/annex/" + record.get('img_name');
        //        return '<a target="_blank" href=' + s_file + ' >下载</a>'
        //    }
        //}
    ]
});



function view_img(file){
    Ext.create('widget.window', {
        title: '图片预览',
        width: 435,
        height: 450,
        modal: true,
        id:'view_img_id',
        border: false,
        layout: 'fit',
        items: [
            {
                xtype: 'form',
                frame: true,
                bodyPadding: 16,
                defaults: {
                    labelWidth: 50
                },
                items: [
                    {
                        xtype: 'box', //或者xtype: 'component',
                        id: 'logoPic',
                        width: 380, //图片宽度
                        height: 380, //图片高度
                        align: 'center',
                        autoEl: {
                            id: 'show',
                            tag: 'img',    //指定为img标签
                            complete: 'off',
                            src: file    //指定url路径
                        }
                    }
                ]
            }
        ]
    }).show(Ext.get(corp_imgs_window));
}


function delete_corp_img(id){
    Ext.Ajax.request({
        url: '/bolong/delete_corp_img_info',
        params: {
            "id": id
        },
        waitMsg: '正在删除附件...',
        success: function (form, action) {
            Ext.Msg.alert("成功", "删除成功!");
            Ext.getCmp('innerenterimggridview_id').getStore().reload();
        },
        failure: function (form, action) {
            Ext.Msg.alert("失败", "删除失败!");
        }
    });
}
