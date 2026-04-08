include $(TOPDIR)/rules.mk

PKG_NAME:=bpirouter-ui
PKG_VERSION:=1.0.0
PKG_RELEASE:=1

include $(INCLUDE_DIR)/package.mk

define Package/bpirouter-ui
  SECTION:=net
  CATEGORY:=Network
  TITLE:=BpiRouter Web Management UI
  DEPENDS:=+nginx-ssl +openssl-util
endef

define Package/bpirouter-ui/description
  Modern web management interface for BpiRouter industrial routers.
  Vue 3 + Naive UI frontend with Go JSON-RPC backend.
endef

define Build/Compile
endef

define Package/bpirouter-ui/install
	$(INSTALL_DIR) $(1)/usr/bin
	$(INSTALL_BIN) ./files/bpirouter-apid $(1)/usr/bin/
	$(INSTALL_BIN) ./files/bpirouter-gen-cert $(1)/usr/bin/
	$(INSTALL_DIR) $(1)/www/bpirouter
	$(CP) ./files/www/* $(1)/www/bpirouter/
	$(INSTALL_DIR) $(1)/usr/share/bpirouter/nginx
	$(INSTALL_DATA) ./files/nginx/bpirouter.conf $(1)/usr/share/bpirouter/nginx/
	$(INSTALL_DATA) ./files/nginx/bpirouter-locations.inc $(1)/usr/share/bpirouter/nginx/
	$(INSTALL_DIR) $(1)/etc/init.d
	$(INSTALL_BIN) ./files/init.d/bpirouter-api $(1)/etc/init.d/
	$(INSTALL_DIR) $(1)/etc/uci-defaults
	$(INSTALL_BIN) ./files/uci-defaults/99-bpirouter-setup $(1)/etc/uci-defaults/
endef

define Package/bpirouter-ui/postinst
#!/bin/sh
[ -n "$${IPKG_INSTROOT}" ] || {
	/etc/uci-defaults/99-bpirouter-setup
	rm -f /etc/uci-defaults/99-bpirouter-setup
}
endef

$(eval $(call BuildPackage,bpirouter-ui))
