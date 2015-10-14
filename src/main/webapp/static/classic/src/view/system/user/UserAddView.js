/**
 * This view is an example list of people.
 */
Ext.define('app.view.system.user.UserAddView', {
    extend: 'Ext.window.Window',
    xtype: 'useraddview',
    width: 400,
    title: '添加用户',
    constrain: true,
    closable: true,
    modal: true,
    layout: 'fit',
    items: {  // Let's put an empty grid in just to illustrate fit layout
        xtype: 'form',
        bodyPadding: 10,
        layout: 'form',

        items: [
        //    {
        //    xtype: 'textfield',
        //    name: 'id',
        //    fieldLabel: '用户ID',
        //    hidden: 'true'
        //},

            {
            xtype: 'textfield',
            name: 'account',
            fieldLabel: '帐号',
            allowBlank: false
        }, {
            xtype: 'textfield',
            name: 'password',
            inputType: 'password',
            fieldLabel: '密码',
            allowBlank: false
        }, {
            xtype: 'textfield',
            name: 'name',
            fieldLabel: '姓名',
            allowBlank: false
        },
        //    {
        //    xtype: 'radiofield',
        //    name: 'sex',
        //    value: '男',
        //    fieldLabel: '性别',
        //    boxLabel: '男'
        //}, {
        //    xtype: 'radiofield',
        //    name: 'sex',
        //    value: '女',
        //    fieldLabel: '',
        //    labelSeparator: '',
        //    hideEmptyLabel: false,
        //    boxLabel: '女'
        //},
            {
                xtype: 'container',
                anchor: '100%',
                layout: 'column',
                items: [
                    {
                        layout: "column",
                        fieldLabel: '性&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp别',
                        labelAlign: 'right',
                        xtype: 'radiogroup', anchor: '220%', columns: 20, items: [
                        {boxLabel: "男", name: 'sex', inputValue: '男',checked: true},
                        {boxLabel: "女", name: 'sex', inputValue: '女'}
                    ]
                    }
                ]
            },
            {
            xtype: 'textfield',
            name: 'phone',
            fieldLabel: '手机号',
            allowBlank: false
        },{
            xtype: 'textareafield',
            name: 'address',
            fieldLabel: '联系地址',
            allowBlank: false
        },{
            xtype: 'textareafield',
            name: 'remark',
            fieldLabel: '备注'
        } ,
            {
                xtype: 'container',
                anchor: '100%',
                layout: 'column',
                items: [
                    {
                        xtype:'filefield',
                        labelAlign: 'right',
                        fieldLabel:'上传头像',
                        name:'img',
                        id:'img',
                        anchor: '97%',
                        buttonText:'',
                        buttonConfig:{
                            iconCls:'upload'
                        },
                        listeners:{
                            change:function(btn,value){
                                //是否是规定的图片类型
                                var img_reg = /\.([jJ][pP][gG])$|\.([jJ][pP][eE][gG])$|\.([gG][iI][fF])小贝$|\.([pP][nN][gG])$|\.([bB][mM][pP])$/;
                                if (img_reg.test(value)) {
                                    var img = Ext.getCmp('staffavatar');
                                    var file = btn.fileInputEl.dom.files[0];
                                    var url = URL.createObjectURL(file);
                                    img.setSrc(url);
                                } else {
                                    Ext.Msg.alert('提示', '请选择图片类型的文件！');
                                    Ext.getCmp('url').reset();
                                    return ;
                                }
                            }
                        }
                    },
                    {
                        xtype: 'fieldset',
                        width:255,
                        margin:'10 10 10 10',
                        title: '图片预览',
                        defaults: {margin:'10 0 10 20', width: 200,height:150},
                        items: [
                            {
                                xtype: 'image',
                                id: 'staffavatar',
                                border:1,
                                src: 'upload/per.png',
                                style: {
                                    borderColor: 'blue',
                                    borderStyle: 'solid'
                                }}
                        ]
                    }
                ]
            }
        ],
        buttonAlign: "center",
        buttons: [
            {
                text: '重置',
                handler: function () {
                    this.up('form').getForm().reset();
                }
            },
            {
                text: '保存',
                handler: function () {
                    var form = this.up('form').getForm();
                    if (form.isValid()){
                        form.submit({
                            url: '/enter/add_users_info',
                            waitMsg: '正在保存数据...',
                            success: function(form, action){
                                Ext.Msg.alert("成功", "数据保存成功!");
                                //重新载入渠道信息
                                Ext.getCmp('usergridview_id').getStore().reload();
                            },
                            failure: function(form, action){
                                Ext.Msg.alert("失败", "数据保存失败!");
                            }
                        });
                    }
                }
            }
        ]
    }
});
